#!/bin/bash
set -e

echo "🚀 Membuat build Quartz baru..."
npx quartz build

echo "📤 Deploy hasil build ke GitHub Pages..."
git subtree push --prefix public origin gh-pages

echo "✅ Selesai! Situs kamu sekarang ter-update di:"
echo "👉 https://social-lensiro.github.io/quartz-new/"

