#!/usr/bin/env bash
# postbuild.sh — Adds the custom domain to the GitHub Pages artifact.
# Run after `next build` in CI or locally.

set -euo pipefail

OUT_DIR="${1:-./out}"

echo "[postbuild] Adding the custom domain to $OUT_DIR"

# Keep Next.js's generated root page and 404 intact; replacing index.html here
# used to add a client-side locale redirect and an unnecessary network round trip.
echo "sebastianrojas.lat" > "$OUT_DIR/CNAME"
echo "[postbuild] Done"
