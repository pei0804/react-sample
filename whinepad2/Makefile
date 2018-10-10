build:
	babel --presets react,es2015 js/source -d js/build # トランスパイル
	browserify js/build/app.js -o bundle.js # バンドル
	browserify js/build/discover.js -o discover-bundle.js
	cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' > bundle.css # cssパッケージング

watch:
	npm run watch

deploy:
	rm -rf __deployme
	mkdir __deployme
	sh scripts/build.sh
	uglify -s bundle.js -o __deployme/bundle.js
	cssshrink bundle.css > __deployme/bundle.css
	cp index.html __deployme/index.html
	cp -r images/ __deployme/images/
	date; echo;

install:
	npm install -g browserify
	npm install -g babel-cli
	npm install -g watch
	npm install -g uglify
	npm install -g cssshrink
	npm install -g flow-bin
	npm install -g jest-cli
