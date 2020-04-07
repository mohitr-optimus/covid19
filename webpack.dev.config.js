const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
	output: {
		filename: '[name].bundle.js',
	},
	mode: 'development',
	devServer: {
		contentBase: path.resolve(__dirname, './dist'),
		index: 'index.html',
		port: 9000,
	},
	module: {
		rules: [{
				test: /\.(css|scss|sass)$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	}
});
