import { un as reqest } from '@uni-helper/uni-network';

const service = reqest.create({
  baseURL: import.meta.env.VITE_APP_BASE_URL,
  timeout: 20000
});
