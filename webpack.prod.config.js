const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ASSET_PATH = '/javascript/';

module.exports = {
    entry: {
        'index': './src/index.js',
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: './js/[name].bundle.[hash].js',
        publicPath: ''
    },
    mode: 'production',
    devServer: {
        contentBase: path.resolve(__dirname, './dist'),
        index: 'index.html',
        port: 9000,
    },
    module: {
        rules: [
            {
                test:/\.(scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'
                ]
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(hbs)$/,
                use: {
                    loader: 'handlebars-loader'
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: './style/[name].[hash].css'
        }),
        new HtmlWebpackPlugin({
            title: 'Covid19',
            template: './index.hbs',
            description: 'Volunteer-driven crowdsourced initiative to track the spread of Coronavirus (COVID-19) in India',
            filename: 'index.html'
        })
    ]
}