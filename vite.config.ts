/*
 * @Author: dushuai
 * @Date: 2024-08-09 21:14:55
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-12 21:41:13
 * @description: viteconfig
 */
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import uniPages from '@uni-helper/vite-plugin-uni-pages';
import AutoImport from 'unplugin-auto-import/vite';
import UniHelperComponents from '@uni-helper/vite-plugin-uni-components';
import { UnifiedViteWeappTailwindcssPlugin } from 'weapp-tailwindcss/vite';
import postcssPlugins from './postcss.config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    uniPages({
      dts: 'typings/uni-pages.d.ts',
      subPackages: ['src/pagesCommon', 'src/pagesUser'] // 分包路径
    }),

    uni(),

    UnifiedViteWeappTailwindcssPlugin({
      rem2rpx: true
      // rem2rpx 等价于下面的配置
      // 32 意味着 1rem = 32rpx
      // rootValue: 32,
      // 默认所有属性都转化
      // propList: ['*'],
      // 转化的单位,可以变成 px / rpx
      // transformUnit: 'rpx'
    }),

    AutoImport({
      imports: ['vue', 'uni-app', 'pinia'],
      dts: 'typings/auto-imports.d.ts'
    }),

    UniHelperComponents({
      dts: 'typings/uni-components.d.ts',
      directoryAsNamespace: true
    })
  ],

  // 内联 postcss 注册 tailwindcss
  css: {
    postcss: {
      plugins: postcssPlugins
    }
  }

});
