#!/usr/bin/env bash

# QA
eslint js/source js/__tests__
flow
npm test

# JavaScriptのトランスパイル
babel --presets react,es2015 js/source -d js/build
browserify js/build/discover.js -o discover-bundle.js
# JavaScriptのパッケージング
browserify js/build/app.js -o bundle.js
# CSSのパッケージング
cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' > bundle.css
# 完了
date; echo;