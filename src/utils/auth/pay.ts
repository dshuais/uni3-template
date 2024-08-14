/*
 * @Author: dushuai
 * @Date: 2024-08-14 21:53:51
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-14 21:58:30
 * @description: 微信支付
 */

/**
 * 微信支付
 */
export function requestPayment(params: any) {
  return new Promise<boolean>((resolve, reject) => {
    try {
      const { timeStamp, nonceStr, package_str, paySign, orderInfo } = params;
      uni.requestPayment({
        provider: 'wxpay',
        orderInfo,
        timeStamp,
        nonceStr,
        package: package_str,
        signType: 'MD5',
        paySign,
        success() {
          resolve(true);
        },
        fail(_err) {
          console.warn('requestPayment fail:>> ', _err);
          reject(_err);
        }
      });
    } catch(_err) {
      console.warn('requestPayment error:>> ', _err);
      reject(_err);
    }
  });
}
