#!/bin/bash

set -e

# 1. 创建一个独立的 gh-pages 分支
git checkout --orphan gh-pages

# 2. 开始构建
echo "Building started..."
npm run build

# 3. 假设构建输出文件夹为 docs
folder_name="docs"

# 4. 将生成的文件添加到 Git 暂存区
git --work-tree="$folder_name" add --all

# 5. 提交到 gh-pages 分支
git --work-tree="$folder_name" commit -m "gh-pages"

# 6. 推送到 gh-pages 分支
echo "Pushing to gh-pages..."
git push origin HEAD:gh-pages --force

# 7. 删除构建文件夹
rm -r "$folder_name"

# 8. 切回 master 分支
git checkout -f master

# 9. 删除 gh-pages 分支
git branch -D gh-pages

# 10. 完成部署
echo "Successfully deployed, check your settings"
