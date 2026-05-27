#!/usr/bin/env bash
# postbuild.sh — Generates root redirect, 404 page, and CNAME for GitHub Pages
# Run after `next build` in CI or locally.

set -euo pipefail

OUT_DIR="${1:-./out}"

echo "[postbuild] Generating root-level GitHub Pages files in $OUT_DIR"

# 1. Root index.html — language-aware redirect to the user's locale
cat > "$OUT_DIR/index.html" << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Sebastián Rojas</title>
  <meta name="description" content="Full Stack Software Engineer">
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 80vh; margin: 0; background: #fafafa; color: #1a1a1a; }
    .card { text-align: center; padding: 2rem; }
    a { color: #2563eb; }
  </style>
</head>
<body>
  <div class="card">
    <p>Redirecting you to the site&hellip;</p>
    <p><a href="/en/">Go to English</a> &middot; <a href="/es/">Ir a Español</a></p>
  </div>
  <script>
    (function() {
      var lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      var locale = lang.startsWith('es') ? 'es' : 'en';
      window.location.replace('/' + locale + '/');
    })();
  </script>
  <noscript><meta http-equiv="refresh" content="0; url=/en/"></noscript>
</body>
</html>
EOF

# 2. 404.html — custom error page that also redirects
cat > "$OUT_DIR/404.html" << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Page Not Found — Sebastián Rojas</title>
  <meta name="description" content="Page not found">
  <style>
    body { font-family: system-ui, -apple-system, sans-serif; display: flex; justify-content: center; align-items: center; min-height: 80vh; margin: 0; background: #fafafa; color: #1a1a1a; }
    .card { text-align: center; padding: 2rem; }
    h1 { font-size: 3rem; margin: 0; }
    a { color: #2563eb; }
  </style>
</head>
<body>
  <div class="card">
    <h1>404</h1>
    <p>Page not found.</p>
    <p><a href="/en/">Go to English home</a> &middot; <a href="/es/">Ir a inicio en Español</a></p>
  </div>
  <script>
    (function() {
      var lang = (navigator.language || navigator.userLanguage || '').toLowerCase();
      var locale = lang.startsWith('es') ? 'es' : 'en';
      window.location.replace('/' + locale + '/');
    })();
  </script>
  <noscript><meta http-equiv="refresh" content="0; url=/en/"></noscript>
</body>
</html>
EOF

# 3. CNAME — persist the custom domain in the deployment artifact
echo "sebastianrojas.lat" > "$OUT_DIR/CNAME"

# 4. Create locale index.html files for GitLab Pages directory routing
# Next.js static export generates flat HTML files (e.g., es.html, en.html)
# but with trailingSlash:true, the root redirect sends users to /es/ or /en/.
# GitHub Pages expects es/index.html to serve /es/ — so we copy the flat
# HTML into the locale directory.
# Disable extglob temporarily so we can glob *.html without matching dirs.
shopt -s nullglob extglob
for flat_html in "$OUT_DIR"/!(_)*.html; do
  base_name=$(basename "$flat_html" .html)

  # Skip special files
  case "$base_name" in
    index|404|_not-found) continue ;;
  esac

  # If there's a directory with the same base name, create index.html inside it
  target_dir="$OUT_DIR/$base_name"
  if [ -d "$target_dir" ] && [ ! -f "$target_dir/index.html" ]; then
    cp "$flat_html" "$target_dir/index.html"
    echo "[postbuild] Created $target_dir/index.html from $(basename "$flat_html")"
  fi

  # Also recurse into sub-routes like es/blog.html → es/blog/index.html
  parent_dir=$(dirname "$flat_html" | sed "s|^$OUT_DIR/||")
  sub_flat="$OUT_DIR/$parent_dir/$base_name.html"
  sub_dir="$OUT_DIR/$parent_dir/$base_name"
  if [ -f "$sub_flat" ] && [ -d "$sub_dir" ] && [ ! -f "$sub_dir/index.html" ]; then
    cp "$sub_flat" "$sub_dir/index.html"
    echo "[postbuild] Created $sub_dir/index.html from $parent_dir/$base_name.html"
  fi
done
shopt -u nullglob extglob

echo "[postbuild] Done — created index.html, 404.html, CNAME, locale index files"
