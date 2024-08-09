export * from './modules/app';

/**
 * 创建持久化依赖
 * @param key 存放在缓存中的key
 * @returns persist
 */
export const createPersist = (key: string) => ({
  key,
  storage: sessionStorage()
});

/**
 * 手动重写persist storage .
 * storage to use for state persistence, defaults to localStorage for web
 * @returns
 */
export const sessionStorage = () => ({
  /** Returns the current value associated with the given key, or null if the given key does not exist. */
  getItem: (key: string) => uni.getStorageSync(key),

  /**
   * Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.
   *
   * Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)
   *
   * Dispatches a storage event on Window objects holding an equivalent Storage object.
   */
  setItem: (key: string, value: any) => uni.setStorageSync(key, value),

  /**
   * Removes the key/value pair with the given key, if a key/value pair with the given key exists.
   *
   * Dispatches a storage event on Window objects holding an equivalent Storage object.
   */
  removeItem: (key: string) => uni.removeStorageSync(key),

  /**
   * Removes all key/value pairs, if there are any.
   *
   * Dispatches a storage event on Window objects holding an equivalent Storage object.
   */
  clear: () => uni.clearStorageSync()
});
