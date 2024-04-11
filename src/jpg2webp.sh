#!/usr/bin/env zsh

# 切換到腳本所在的目錄
cd "$(dirname "$0")"

# 遞歸查找所有的 jpg 檔案，並轉換為 webp 格式
find . -type f -name '*.jpg' | while read file; do
  webpfile="${file%.jpg}.webp"
  if [ ! -f "$webpfile" ]; then
    echo "Converting $file to $webpfile..."
    cwebp -quiet -q 75 "$file" -o "$webpfile"
  else
    echo "$webpfile already exists, skipping..."
  fi
done
