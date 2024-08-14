
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

/**
 * uuid
 */
export const uuid = () => {
  const s = [];
  const hexDigits = '0123456789abcdef';
  for(let i = 0; i < 36; i++) s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);

  s[14] = '4'; // bits 12-15 of the time_hi_and_version field to 0010
  // @ts-expect-error
  s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);
  // bits 6-7 of the clock_seq_hi_and_reserved to 01
  s[8] = s[13] = s[18] = s[23] = '-';
  return s.join('');
};

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

/** px转rpx */
export const pxToRpx = (px: number) => {
  // 计算比例
  const scale = uni.upx2px(100) / 100;
  return px / scale;
};

/**
 * 计算两个经纬度之间的距离
 */
export function calculateDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const radius = 6371 * 1000; // 地球半径（单位：米）

  // 将经纬度转换为弧度
  const latRad1 = toRadians(lat1);
  const lonRad1 = toRadians(lon1);
  const latRad2 = toRadians(lat2);
  const lonRad2 = toRadians(lon2);

  // 使用Haversine公式计算距离
  const dlon = lonRad2 - lonRad1;
  const dlat = latRad2 - latRad1;
  const a
    = Math.sin(dlat / 2) ** 2
    + Math.cos(latRad1) * Math.cos(latRad2) * Math.sin(dlon / 2) ** 2;
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = radius * c;

  return distance;
}

function toRadians(degrees: number) {
  return degrees * (Math.PI / 180);
}
