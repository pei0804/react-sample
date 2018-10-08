build:
	babel --presets react,es2015 js/source -d js/build # トランスパイル
	browserify js/build/app.js -o bundle.js # バンドル
	browserify js/build/discover.js -o discover-bundle.js
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

deps:
	npm install --save-dev react@15.0.2
	npm install --save-dev react-dom@15.0.2
	npm install --save-dev classnames
	npm install --save-dev babel-preset-react
	npm install --save-dev babel-preset-es2015
