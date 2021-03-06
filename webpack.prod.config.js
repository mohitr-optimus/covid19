const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const merge = require('webpack-merge');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const common = require('./webpack.common.js');
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");
const smp = new SpeedMeasurePlugin();

const mergedConfig = merge(common, {
	output: {
		filename: './js/[name].bundle.[hash].js',
    },
	mode: 'production',
	module: {
		rules: [
			{
				test: /\.(css|scss|sass)$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
					},
					{
						loader: 'sass-loader',
					},
				],
			}
		],
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: './style/[name].[hash].css',
		}),
		new webpack.SourceMapDevToolPlugin({
			filename: 'sourcemaps/[file].map',
			exclude: /\.(css|scss|sass)$/,
			publicPath: 'https://mohitr-optimus.github.io',
		}),
		new BundleAnalyzerPlugin({
			analyzerMode: 'static',
			openAnalyzer: false,
			reportFilename: '../bundleAnalyzer/report.html',
        })
	],
});

module.exports = smp.wrap(mergedConfig);
