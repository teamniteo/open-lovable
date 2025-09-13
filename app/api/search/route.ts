import { NextRequest, NextResponse } from 'next/server';
import { buildKey, getCache, isLocalCacheEnabled, setCache } from '@/lib/localCache';

export async function POST(req: NextRequest) {
  try {
    const { query } = await req.json();
    
    if (!query) {
      return NextResponse.json({ error: 'Query is required' }, { status: 400 });
    }

    // Local cache check
    const cacheEnabled = isLocalCacheEnabled();
    const ttlMs = Number(process.env.LOCAL_SEARCH_CACHE_TTL_MS || process.env.LOCAL_SCRAPE_CACHE_TTL_MS || 12 * 60 * 60 * 1000);
    const cacheKey = buildKey(['search', query]);
    if (cacheEnabled) {
      const cached = await getCache<any>(cacheKey, ttlMs);
      if (cached) return NextResponse.json(cached);
    }

    // Use Firecrawl search to get top 10 results with screenshots
    const searchResponse = await fetch('https://api.firecrawl.dev/v1/search', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.FIRECRAWL_API_KEY}`,
      },
      body: JSON.stringify({
        query,
        limit: 10,
        scrapeOptions: {
          formats: ['markdown', 'screenshot'],
          onlyMainContent: true,
        },
      }),
    });

    if (!searchResponse.ok) {
      throw new Error('Search failed');
    }

    const searchData = await searchResponse.json();
    
    // Format results with screenshots and markdown
    const results = searchData.data?.map((result: any) => ({
      url: result.url,
      title: result.title || result.url,
      description: result.description || '',
      screenshot: result.screenshot || null,
      markdown: result.markdown || '',
    })) || [];

    const payload = { results };
    if (cacheEnabled) await setCache(cacheKey, payload);
    return NextResponse.json(payload);
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: 'Failed to perform search' },
      { status: 500 }
    );
  }
}
