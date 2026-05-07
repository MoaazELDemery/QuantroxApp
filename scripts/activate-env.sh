#!/usr/bin/env zsh
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$PROJECT_DIR"

# Ensure nvm is available in non-interactive shells.
export NVM_DIR="${NVM_DIR:-$HOME/.nvm}"

# nvm fails if npm_config_prefix is set globally (common with Homebrew npm setup).
unset npm_config_prefix

if [[ -s "$NVM_DIR/nvm.sh" ]]; then
  source "$NVM_DIR/nvm.sh"
fi

if ! command -v nvm >/dev/null 2>&1; then
  echo "nvm is required but not available in this shell."
  echo "Install nvm, then run: nvm install && nvm use"
  exit 1
fi

nvm use >/dev/null || nvm install

if [[ ! -d node_modules ]]; then
  echo "Installing dependencies (first-time setup)..."
  npm ci
else
  echo "node_modules already exists. Skipping npm install."
fi

echo "Environment ready with Node $(node -p 'process.version')"
