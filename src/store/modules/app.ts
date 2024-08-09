import { StoreKey } from '@/constant/enums';
import { createPersist } from '..';

export const useAppStore = defineStore('app', () => {
  const token = ref<string>('');

  /**
   * 设置token
   * @param {string} tk token
   */
  const SET_TOKEN = (tk: string): void => {
    token.value = tk;
  };

  /** 清除token */
  const REMOVE_TOKEN = (): void => {
    token.value = '';
  };

  return {
    /** token */
    token,
    /** 设置token */
    SET_TOKEN,
    /** 清除token */
    REMOVE_TOKEN
  };

}, {
  persist: createPersist(StoreKey.APP)
});
