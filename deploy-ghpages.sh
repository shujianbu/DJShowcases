#!/bin/bash

rm -rf out || exit 0;
mkdir out;

cd out
cp -r ../build/* .
git init
git config user.name "Shujian Bu"
git config user.email "shujian.bu@gmail.com"
git add .
git commit -m "auto deployment to gh-pages"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
