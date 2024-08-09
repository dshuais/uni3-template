import { createSSRApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';

export function createApp() {
  const app = createSSRApp(App)
    .use(createPinia());

  return {
    app
  };
}
