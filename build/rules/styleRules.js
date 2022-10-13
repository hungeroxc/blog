const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const { resolve } = require('./../utils')

module.exports = [
    {
        test: /\.scss$/,
        use: [
            // 'style-loader',
            MiniCssExtractPlugin.loader,
            'css-modules-typescript-loader',
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        localIdentName: '[local]__[hash:base64:10]',
                    },
                },
            },
            {
                loader: 'sass-loader',
                options: {
                    sassOptions: {
                        includePaths: [resolve('src/styles')],
                    },
                },
            },
        ],
    },
    // antd样式文件编译
    {
        test: /\.less$/,
        use: [
            // 'style-loader',
            MiniCssExtractPlugin.loader,
            'css-loader',
            {
                loader: 'less-loader',
                options: {
                    lessOptions: {
                        javascriptEnabled: true,
                    },
                },
            },
        ],
    },
]
