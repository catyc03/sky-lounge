#!/bin/bash

# Build the project
npm run build

# Create gh-pages branch if it doesn't exist
git checkout --orphan gh-pages 2>/dev/null || git checkout gh-pages

# Remove all files except dist
git rm -rf . 2>/dev/null || true

# Copy dist files to root
cp -r dist/* .

# Remove dist directory
rm -rf dist

# Add .nojekyll file
touch .nojekyll

# Add all files
git add .

# Commit
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
git push origin gh-pages --force

# Switch back to master
git checkout master
