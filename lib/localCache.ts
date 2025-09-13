import { promises as fs } from 'fs';
import path from 'path';
import crypto from 'crypto';

type CacheEntry<T> = {
  ts: number;
  data: T;
};

const CACHE_DIR = path.join(process.cwd(), '.cache', 'firecrawl');

function hashKey(input: string): string {
  return crypto.createHash('sha1').update(input).digest('hex');
}

export function buildKey(parts: unknown[]): string {
  return hashKey(JSON.stringify(parts));
}

async function ensureDir(dir: string) {
  try {
    await fs.mkdir(dir, { recursive: true });
  } catch {}
}

export async function getCache<T>(key: string, ttlMs: number): Promise<T | null> {
  try {
    const file = path.join(CACHE_DIR, `${key}.json`);
    const raw = await fs.readFile(file, 'utf8');
    const parsed = JSON.parse(raw) as CacheEntry<T>;
    if (Date.now() - parsed.ts <= ttlMs) {
      return parsed.data;
    }
    return null;
  } catch {
    return null;
  }
}

export async function setCache<T>(key: string, data: T): Promise<void> {
  try {
    await ensureDir(CACHE_DIR);
    const file = path.join(CACHE_DIR, `${key}.json`);
    const payload: CacheEntry<T> = { ts: Date.now(), data };
    await fs.writeFile(file, JSON.stringify(payload), 'utf8');
  } catch {
    // best-effort cache; ignore errors
  }
}

export function isLocalCacheEnabled(): boolean {
  // Enable in development by default; allow explicit enable/disable via env
  const env = process.env.LOCAL_SCRAPE_CACHE;
  if (env === '0' || env === 'false') return false;
  if (env === '1' || env === 'true') return true;
  return process.env.NODE_ENV !== 'production';
}

