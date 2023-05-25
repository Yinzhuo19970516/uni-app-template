// Vite中文网：https://vitejs.cn/config/
import { resolve } from 'node:path'
import type { ConfigEnv, UserConfig } from 'vite'
import { loadEnv } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import Unocss from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'

import TransformPages from 'uni-read-pages-vite' // vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'

export default ({ mode }: ConfigEnv): UserConfig => {
  const root = process.cwd()
  const env = loadEnv(mode, root)
  return {
    base: './',
    // 设置路径别名
    resolve: {
      alias: {
        '@': resolve('./src'),
      },
      extensions: ['.js', '.json', '.ts', '.vue'], // 使用路径别名时想要省略的后缀名，可以自己 增减
    },
    // 自定义全局变量
    define: {
      'process.env': {},
      'ROUTES': new TransformPages().routes,
    },
    // 开发服务器配置
    server: {
      host: true,
      proxy: {
        '^/h5': {
          target: env.VITE_APP_BASE_URL,
          changeOrigin: true,
          rewrite: path => path.replace(/^\/h5/, '/h5'),
        },
      },
    },
    // 构建配置
    build: {
      outDir: 'dist',
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        output: {
          entryFileNames: `assets/[name].${new Date().getTime()}.js`,
          chunkFileNames: `assets/[name].${new Date().getTime()}.js`,
          assetFileNames: `assets/[name].${new Date().getTime()}.[ext]`,
          compact: true,
        },
      },
    },
    // 插件
    plugins: [
      uni(),
      Unocss({
        presets: [
          presetUno(),
          presetAttributify(),
          presetIcons(),
        ],
      }),
      // 自动导入
      AutoImport({
        include: [
          /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
          /\.vue$/,
          /\.vue\?vue/, // .vue
        ],
        imports: [
          'vue',
          'uni-app',
          'pinia',
          {
            'uni-mini-router': ['useRouter', 'useRoute'],
          },
        ],
        dts: 'auto-imports.d.ts',
        dirs: ['src/store'],
        eslintrc: {
          enabled: true,
        },
      }),
    ],
  }
}
