import type { Config } from 'tailwindcss';

export default <Config>{
  content: ['./index.html', './src/**/*.{html,js,ts,jsx,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // 你可以在这里进行颜色的扩展
        primary: {
          'DEFAULT': 'var(--color-primary, #0089FF)',
          'light-3': 'var(--color-primary-light-3, rgb(85, 199, 255))',
          'light-5': 'var(--color-primary-light-5, rgb(130, 217, 255))',
          'light-7': 'var(--color-primary-light-7, rgb(175, 235, 255))',
          'light-9': 'var(--color-primary-light-9, rgb(219, 252, 255))',
          'dark-2': 'var(--color-primary-dark-2, rgb(0, 135, 204))'
        }
      }
    }
  },
  // https://weapp-tw.icebreaker.top/docs/quick-start/uni-app-css-macro
  plugins: [],
  corePlugins: {
    // 小程序去使用 h5 的 preflight 和响应式 container 没有意义
    preflight: false
  }
};