/*
 * @Author: dushuai
 * @Date: 2024-08-12 20:46:02
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-12 21:16:03
 * @description: defineUniPages
 */
import { defineUniPages } from '@uni-helper/vite-plugin-uni-pages';

export default defineUniPages({
  // 你也可以定义 pages 字段，它具有最高的优先级。
  pages: [],
  subPackages: [
    // {
    //   root: 'pagesCommon',
    //   pages: []
    // },
    // {
    //   root: 'pagesUser',
    //   pages: []
    // }
  ],
  preloadRule: {
    'pages/home/index': {
      'network': 'all',
      'packages': ['pagesCommon']
    },

    'pages/personal/index': {
      'network': 'all',
      'packages': ['pagesUser']
    }
  },
  globalStyle: {
    navigationBarTextStyle: 'black',
    navigationBarTitleText: 'uni-helper-pages',
    navigationBarBackgroundColor: '#f8f8f8',
    backgroundColor: '#f8f8f8'
  },
  tabBar: {
    color: '#7A7E83',
    selectedColor: '#3cc51f',
    borderStyle: 'black',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/home/index',
        text: '首页'
      },
      {
        pagePath: 'pages/personal/index',
        text: '个人中心'
      }
    ]
  },
  easycom: {
    autoscan: true,
    custom: {
      // "^uni-(.*)": "@/components/uni-$1.vue", // 匹配 components 目录内的 vue 文件
      // 'Base(.*)': '@/components/Base/$1/index.vue'
    }
  },
  requiredBackgroundModes: [],
  lazyCodeLoading: 'requiredComponents'
});
