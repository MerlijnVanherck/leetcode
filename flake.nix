{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs =
    {
      self,
      nixpkgs,
      flake-utils,
    }:
    flake-utils.lib.eachDefaultSystem (
      system:
      let
        pkgs = import nixpkgs { inherit system; };
        dev-tools = with pkgs; [
          nodejs
          typescript-language-server
          vscode-extensions.dbaeumer.vscode-eslint
        ];
      in
      {
        devShells.default = pkgs.mkShell {
          name = "dev-shell";
          nativeBuildInputs = dev-tools;
        };
      }
    );
}
