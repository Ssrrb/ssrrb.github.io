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

echo "[postbuild] Done — created index.html, 404.html, CNAME"
