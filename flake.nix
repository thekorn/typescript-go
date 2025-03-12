{
  inputs = {
    flake-utils.url = "github:numtide/flake-utils";
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-24.11";
  };

  outputs = { self, flake-utils, nixpkgs }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = (import nixpkgs) {
          inherit system;
          config.allowUnfree = true;
        };
      in {
        devShell = pkgs.mkShell {
          nativeBuildInputs = with pkgs; [
            go
            nodePackages.npm
          ];

          shellHook = ''
              go install
              npm install
              npm install -g hereby --prefix ~/.npm-packages
              export PATH="~/.npm-packages/bin:$PATH"
          '';

          NODE_PATH="~/.npm-packages/lib/node_modules";
        };
      }
    );
}
