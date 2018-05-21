const join = require('path').join;
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: join(__dirname, 'src', 'index.js'),
	output: {
		path: join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js|\.jsx/,
				exclude: /node_modules/,
				loader: "babel-loader"
			},
			{
				test: /.css$/,
				use: ExtractTextPlugin.extract({
					fallback : "style-loader",
					use: [
						'css-loader',
					]	
				})
			},
			{
				test: /.sss$/,
				use: ExtractTextPlugin.extract({
					fallback : "style-loader",
					use: [
						'css-loader',
						'postcss-loader'
					]	
				})
			}
		]
	},
	plugins: [
	  new ExtractTextPlugin('bundle.css')
	],
}