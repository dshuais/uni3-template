
/**
 * 防抖函数
 * @param func
 * @param delay
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function debounceFn(func: Function, delay = 100) {
  let timer: any;
  return (...args: any) => {
    // 当delay等于0时，取消debounce，改为同步执行该方法
    if(delay === 0) {
      return func(...args);
    }

    clearTimeout(timer);
    timer = setTimeout(() => {
      func(...args);
    }, delay);
  };
}

/**
 * 节流throttle
 * @param func
 * @param delay
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function throttle(func: Function, delay = 100) {
  let canRun = true;
  return (...args: any) => {
    // 在函数开头判断标记是否为true，不为true则return
    if(!canRun) return;
    canRun = false;
    func(...args);
    setTimeout(() => {
      canRun = true;
    }, delay);
  };
}

/** 生成16位随机数 */
export const randomStr = (length = 16) => {
  const RAND_ARR = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
  ];
  return new Array(length)
    .fill(1)
    .map(() => {
      return RAND_ARR[Math.floor(Math.random() * (RAND_ARR.length - 1))];
    })
    .join('');
};

/**
 * This is just a simple version of deep copy
 * Has a lot of edge cases bug
 * If you want to use a perfect deep copy, use lodash's _.cloneDeep
 * @param {Object} source
 * @returns {Object}
 */
export function deepClone<T>(source: T): T {
  if(!source && typeof source !== 'object') {
    throw new Error('error arguments deepClone');
  }
  const targetObj = (source!.constructor === Array ? [] : {}) as T;

  Object.keys(source!).forEach(keys => {
    type K = keyof typeof source;
    if(source![keys as K] && typeof source![keys as K] === 'object') {
      targetObj[keys as K] = deepClone(source![keys as K]);
    } else {
      targetObj[keys as K] = source![keys as K];
    }
  });

  return targetObj;
}
