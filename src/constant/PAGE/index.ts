import { PAGE_COMMON } from './modules/common';
import { PAGE_USER } from './modules/user';

export * from './modules/common';
export * from './modules/user';

/** tabbar页面 */
export const PAGE_TABBAR = {
  /** 首页 */
  HOME: '/pages/home/index',

  /** 个人中心 */
  PERSONAL: '/pages/personal/index'
};

/** 主包页面 */
export const PAGE_MAIN = {
  ...PAGE_TABBAR
};

/** 所有页面 */
export const PAGE = {
  ...PAGE_MAIN,
  ...PAGE_COMMON,
  ...PAGE_USER
};

/** 自定义tabbar */
export const PAGE_TABBAR_CUSTOM = [
  {
    id: 'home',
    path: PAGE_TABBAR.HOME,
    text: '首页',
    icon: 'home',
    selectedIcon: 'home-fill'
  },
  {
    id: 'personal',
    path: PAGE_TABBAR.PERSONAL,
    text: '个人中心',
    icon: 'home',
    selectedIcon: 'home-fill'
  }
];
