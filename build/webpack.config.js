const { resolve } = require('./utils')
const jsRules = require('./rules/jsRules')
const plugins = require('./plugins')
const styleRules = require('./rules/styleRules')
const optimization = require('./optimization')

const isDev = process.env.NODE_ENV === 'development'

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    entry: {
        app: resolve('src/index.tsx'),
    },
    output: {
        path: resolve('dist'),
        filename: isDev ? 'js/[name].js' : `js/[name].[chunkhash].js`,
        chunkFilename: isDev ? 'js/[name].js' : `js/[name].[id].[chunkhash].js`,
        publicPath: '/',
    },
    module: {
        rules: [...jsRules, ...styleRules],
    },
    plugins: [...plugins],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@views': resolve('src/containers/views'),
            '@shared': resolve('src/containers/shared'),
            '@services': resolve('src/services'),
            '@constants': resolve('src/constants'),
            '@store': resolve('src/store'),
            '@utils': resolve('src/utils'),
            '@assets': resolve('src/assets'),
            '@styles': resolve('src/styles'),
        },
    },
    devtool: isDev ? undefined : 'source-map',
    cache: {
        type: 'filesystem',
        allowCollectingMemory: true,
    },
    devServer: {
        historyApiFallback: true,
    },
    optimization: isDev ? {} : optimization,
    mode: process.env.NODE_ENV,
}
