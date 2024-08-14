/*
 * @Author: dushuai
 * @Date: 2024-08-14 22:06:44
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-14 22:11:32
 * @description: 小程序分享
 */

type Options = {
  title?: string
  path?: string
  query?: string
  imageUrl?: string
  isTimeLine?: boolean
}

/**
 * 小程序分享
 */
export default function useShare(options: Options = {}) {
  // #ifdef MP-WEIXIN
  const { title, path, imageUrl, query, isTimeLine } = options;

  onShareAppMessage(() => {
    return {
      title,
      path: path ? `${path}${query ? `?${query}` : ''}` : '',
      imageUrl
    };
  });

  if(isTimeLine) {
    onShareTimeline(() => {
      return {
        title,
        query: options?.query ?? '',
        imageUrl
      };
    });
  }

  // #endif
}
