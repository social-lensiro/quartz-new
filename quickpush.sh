#!/bin/bash
# =======================================
# 💨 QUICK PUSH (tanpa build/deploy)
# =======================================

# Warna terminal
GREEN="\033[0;32m"
BLUE="\033[0;34m"
YELLOW="\033[1;33m"
RESET="\033[0m"

echo -e "${BLUE}🚀 Menyimpan perubahan ringan ke GitHub...${RESET}"

git add .
git commit -m "Quick update $(date)"
git push origin main

echo -e "${GREEN}✅ Berhasil disimpan ke branch main di GitHub!${RESET}"

