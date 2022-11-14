#!/usr/bin/env bash
set -o errexit

# strip whitespace from filename "$1" and pipe back to same file.
git stripspace < "$1" | sponge "$1"
