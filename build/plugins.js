const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DefinePlugin = require('webpack').DefinePlugin

module.exports = [
    new HtmlWebpackPlugin({
        template: 'build/tpl/index.html',
        inject: true,
    }),
    new WebpackBar(),
    new MiniCssExtractPlugin({
        filename: '[name].[contenthash].css',
        chunkFilename: '[name].[contenthash].css',
    }),
    new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
]
