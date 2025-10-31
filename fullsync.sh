#!/bin/bash
# ==========================================
# 🧩 Skrip Otomatis Sinkronisasi + Deploy Quartz
# ==========================================

echo "🚀 Mulai proses sinkronisasi dan deploy..."

# 1️⃣ Simpan semua perubahan ke branch main
git add .
git commit -m "Auto backup $(date)"
git push origin main

# 2️⃣ Build ulang situs Quartz
echo "🏗️ Membuat build baru..."
npx quartz build

# 3️⃣ Deploy hasil build ke GitHub Pages (branch gh-pages)
echo "🌍 Deploy ke GitHub Pages..."
git push origin `git subtree split --prefix public main`:gh-pages --force

echo "✅ Selesai! Semua perubahan sudah tersinkron dan terdeploy."
