import { PAGE_COMMON, PAGE_USER } from './modules';

export * from './modules';

/** tabbar页面 */
export const PAGE_TABBAR = {
  /** 首页 */
  HOME: 'pages/home/index',

  /** 个人中心 */
  PERSONAL: 'pages/personal/index'
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

