import shutil
import os
import datetime

# === 📁 PATH KONFIGURASI ===
VAULT_PATH = "/Users/mohamadsandi/Documents/docs lensiro/Manual-Lensiro"
BACKUP_ROOT = "/Users/mohamadsandi/Documents/Lensiro-Backup"

# === 🕒 NAMA FOLDER BERDASARKAN TANGGAL & JAM ===
today = datetime.datetime.now().strftime("%Y-%m-%d_%H-%M")
backup_folder = os.path.join(BACKUP_ROOT, f"backup_{today}")

# === 🏗️ BUAT FOLDER BACKUP BARU ===
os.makedirs(backup_folder, exist_ok=True)

# === 📦 SALIN SEMUA ISI VAULT (TERMASUK SUBFOLDER) ===
shutil.copytree(VAULT_PATH, backup_folder, dirs_exist_ok=True)

print(f"✅ Backup selesai ke: {backup_folder}")
