const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const DefinePlugin = require('webpack').DefinePlugin

const isDev = process.env.NODE_ENV === 'development'

module.exports = [
    new HtmlWebpackPlugin({
        template: 'build/tpl/index.html',
        inject: true,
    }),
    new WebpackBar(),
    new MiniCssExtractPlugin({
        filename: isDev ? 'css/[name].css' : 'css/[name].[contenthash].css',
        chunkFilename: isDev ? 'css/[name].[id].css' : 'css/[name].[id].[contenthash].css',
    }),
    new DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
]
