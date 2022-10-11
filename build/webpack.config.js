const { resolve } = require('./utils')
const jsRules = require('./rules/jsRules')
const plugins = require('./plugins')
const styleRules = require('./rules/styleRules')

/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
    entry: {
        app: resolve('src/index.tsx'),
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js',
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
        },
    },
    devtool: 'source-map',
    cache: {
        type: 'filesystem',
        allowCollectingMemory: true,
    },
}
