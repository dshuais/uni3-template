/*
 * @Author: dushuai
 * @Date: 2023-04-03 14:33:53
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-12 20:57:53
 * @description: 统一处理报错
 */
import { type UnResponse } from '@uni-helper/uni-network';
import { useAppStore } from '@/store';

/** 不需要token的接口列表 */
const noTokenUrl: string[] = ['login'];
/** 报错需要跳转降级页的状态码 -500 */
const to404Url: number[] = [];

/**
 * 统一处理报错
 * @param {UnResponse<Res.Response>} response 请求响应参数
 */
export default (response: UnResponse<Res.Response>) => {
  const code = response.data!.code,
    url = response.config!.url as string,
    appStore = useAppStore();

  if(code === 200) { // 正常

  } else if(code === 401 && !noTokenUrl.includes(url)) { // 401未登录
    console.log('login error:>> ', url);
    // 清除token
    appStore.REMOVE_TOKEN();

  } else if(to404Url.includes(code)) { // 跳降级页

  } else { // 其他错误 统一处理
    // console.log('请求失败err:>> ', response.data);

  }

};
