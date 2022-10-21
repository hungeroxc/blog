import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
import sassDts from 'vite-plugin-sass-dts'

const { resolve } = require('./utils')

export default defineConfig({
    plugins: [
        react(),
        sassDts({
            enabledMode: ['development'],
        }),
        vitePluginImp({
            libList: [
                {
                    libName: 'antd',
                    style: (name) => `antd/lib/${name}/style/index.less`,
                },
            ],
        }),
    ],
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
    resolve: {
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
})
