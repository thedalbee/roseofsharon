#!/usr/bin/env bash
set -euo pipefail

REPO_RAW_BASE="https://raw.githubusercontent.com/thedalbee/roseofsharon-korean-writing/main"
SKILL_URL="$REPO_RAW_BASE/SKILL.md"

install_hermes() {
  local dest="$HOME/.hermes/skills/creative/roseofsharon-korean-writing/SKILL.md"
  mkdir -p "$(dirname "$dest")"
  curl -fsSL "$SKILL_URL" -o "$dest"
  echo "Installed Hermes skill -> $dest"
}

install_codex() {
  local dest="$HOME/.codex/skills/roseofsharon-korean-writing/SKILL.md"
  mkdir -p "$(dirname "$dest")"
  curl -fsSL "$SKILL_URL" -o "$dest"
  echo "Installed Codex skill -> $dest"
}

MODE="${1:-both}"
case "$MODE" in
  hermes)
    install_hermes
    ;;
  codex)
    install_codex
    ;;
  both)
    install_hermes
    install_codex
    ;;
  *)
    echo "Usage: $0 [hermes|codex|both]" >&2
    exit 1
    ;;
esac
