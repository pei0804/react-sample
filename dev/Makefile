build:
	babel --presets react,es2015 js/source -d js/build # トランスパイル
	browserify js/build/app.js -o bundle.js # バンドル
	cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' > bundle.css # cssパッケージング

watch:
	watch "sh scripts/build.sh" js/source css

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
	npm install --global browserify
	npm install --global babel-cli
	npm install --global watch
	npm install --global uglify
	npm install --global cssshrink
