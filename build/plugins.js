const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')

module.exports = [
    new HtmlWebpackPlugin({
        template: 'build/tpl/index.html',
        inject: true,
    }),
    new WebpackBar(),
]
