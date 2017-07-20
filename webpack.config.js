var webpack = require('webpack');

module.exports = {
	context: __dirname+'/src',
	entry: "./root.js",
	module: {
		loaders:[{
			test: /\.js?$/,
			exclude: /(node_modules)/,
			loader: 'babel-loader',
			query: {
				presets: ['react', 'es2015']
			}
		},{
			test:/\.css?$/,
			loader:'style-loader!css-loader'
		},]
	},
	output: {
		path: __dirname,
		filename: "./bundle.js"
	}

}