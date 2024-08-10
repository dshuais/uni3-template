/*
 * @Author: dushuais
 * @Date: 2024-08-09 21:14:55
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-10 19:00:01
 * @Description: main
 */
import { createSSRApp } from 'vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';

import App from './App.vue';

import './static/styles/index.scss';

export function createApp() {
  const app = createSSRApp(App)
    .use(createPinia().use(piniaPluginPersistedstate));

  return {
    app
  };
}
