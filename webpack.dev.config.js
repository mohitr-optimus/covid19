const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const mergedConfig = merge(common, {
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

module.exports = smp.wrap(mergedConfig);
