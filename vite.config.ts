/*
 * @Author: dushuai
 * @Date: 2024-08-09 21:14:55
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-10 22:00:11
 * @description: viteconfig
 */
import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
import AutoImport from 'unplugin-auto-import/vite';
import { UnifiedViteWeappTailwindcssPlugin } from 'weapp-tailwindcss/vite';
import postcssPlugins from './postcss.config';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
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
    })
  ],

  // 内联 postcss 注册 tailwindcss
  css: {
    postcss: {
      plugins: postcssPlugins
    }
  }

});
