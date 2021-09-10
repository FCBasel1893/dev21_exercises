const path = require("path");

module.exports = {
	entry: "./src/js/app.js",
	mode: "development",
	output: {
		filename: "main.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
				'style-loader',	// style-tag in Seite einfügen und css dazwischen packen
			 	'css-loader', // csss in webpack bundle
				'sass-loader'] // scss => css
			}]
		}
	};



	
