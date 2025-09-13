{
  pkgs,
  lib,
  config,
  inputs,
  ...
}:

{

  # https://devenv.sh/packages/
  packages = [ pkgs.git ];

  # https://devenv.sh/languages/
  languages.javascript = {
    enable = true;
    pnpm = {
      enable = true;
      install.enable = true;
    };
  };
  languages.javascript.corepack.enable = true;
  # https://devenv.sh/processes/
  # processes.cargo-watch.exec = "cargo-watch";

  # https://devenv.sh/services/
  # services.postgres.enable = true;

  process.managers.process-compose.tui.enable = false;
  processes = lib.optionalAttrs (!config.container.isBuilding) {
    app = {
      exec = "pnpm build && pnpm start";
    };
  };

  # https://devenv.sh/tests/
  enterTest = ''
    test:all
  '';

  # https://devenv.sh/git-hooks/
  # git-hooks.hooks.shellcheck.enable = true;

  # See full reference at https://devenv.sh/reference/options/
}
