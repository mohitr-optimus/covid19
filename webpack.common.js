const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

function _getVersion() {
    return (new Date()).getTime();
}

module.exports = {
	entry: {
		index: './src/index.js',
    },
    output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '',
	},
	stats: 'errors-only',
	devtool: 'inline-source-map',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: ['babel-loader', 'eslint-loader'],
			},
			{
				test: /\.(hbs)$/,
				use: {
					loader: 'handlebars-loader',
				},
			},
		],
	},
	resolve: {
		extensions: ['.jsx', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: 'Covid19',
			template: './index.hbs',
			description:
				'Volunteer-driven crowdsourced initiative to track the spread of Coronavirus (COVID-19) in India',
			filename: 'index.html',
		}),
		new webpack.DefinePlugin({
            'window.__version__': _getVersion()
        })
	],
};
