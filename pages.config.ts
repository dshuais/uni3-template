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
      // '^wd-(.*)': 'wot-design-uni/components/wd-$1/wd-$1.vue'
    }
  },
  requiredBackgroundModes: [],
  lazyCodeLoading: 'requiredComponents'
});
