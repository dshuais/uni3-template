/*
 * @Author: dushuai
 * @Date: 2024-08-14 22:00:56
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-14 22:17:28
 * @description: 小程序常用方法封装
 */
import { OpenMap, SubMsg } from '.';

/**
 * 小程序更新检测
 */
export function mpUpdate() {
  const updateManager = uni.getUpdateManager();

  // 请求完新版本信息的回调
  updateManager.onCheckForUpdate((res) => {
    console.log('当前是否有最新版本:>> ', res.hasUpdate);
  });

  // 当新版本下载完成
  updateManager.onUpdateReady(() => {
    uni.showModal({
      title: '更新提示',
      content: '检测到新版本，是否下载新版本并重启小程序？',
      success(res) {
        if(res.confirm) {
          // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
          updateManager.applyUpdate();
        }
      }
    });
  });

  // 新的版本下载失败
  updateManager.onUpdateFailed(() => {
    uni.showModal({
      title: '已经有新版本了哟~',
      content: '新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~',
      showCancel: false
    });
  });
}

/**
 * 打开地图
 */
export const openMap = (params: OpenMap) => {
  return new Promise<boolean>((resolve, reject) => {
    const { latitude, longitude, name, address } = params;
    uni.openLocation({
      latitude: +latitude,
      longitude: +longitude,
      name,
      address,
      success: (res) => {
        console.log('openMap success:>> ', res);
        resolve(true);
      },
      fail: (err) => {
        console.warn('openMap fail:>> ', err);
        reject(err);
      }
    });
  });
};

/**
 * 订阅消息
 */
export function subscribeMessage(params: SubMsg) {
  return new Promise<boolean>((resolve, reject) => {
    const { tmplIds } = params;
    uni.requestSubscribeMessage({
      tmplIds,
      success: (res) => {
        console.log('subscribeMessage success:>> ', res);
        resolve(true);
      },
      fail: (err) => {
        console.warn('subscribeMessage fail:>> ', err);
        reject(err);
      }
    });
  });
}

/**
 * 监听网络状态
 */
export const networkStatusChange = () => {
  return new Promise<UniApp.GetNetworkTypeSuccess>((resolve, reject) => {
    uni.getNetworkType({
      success(res) {
        if(res.networkType !== 'none') {
          setTimeout(() => {
            // 跳转首页页面
          }, 500);
        } else if(res.networkType === 'none') {
          setTimeout(() => {
            // 跳转降级页
          }, 500);
        }
        resolve(res);
      },
      fail(err) {
        console.warn('networkStatusChange fail:>> ', err);
        reject(err);
      }
    });
  });
};

/**
 * 保存临时图片到本地
 */
export function saveImageToPhotosAlbum(filePath: string) {
  return new Promise<boolean>((resolve, reject) => {
    if(!filePath) return console.warn('filePath is empty:>> ');
    uni.saveImageToPhotosAlbum({
      filePath,
      success: () => {
        // uni.showToast({
        //   title: '保存成功',
        //   icon: 'none',
        //   duration: 2000
        // });
        resolve(true);
      },
      fail: () => {
        uni.showModal({
          title: '提示',
          content: '请先授权再保存此图片',
          showCancel: false,
          success(data) {
            if(data.confirm) {
              uni.openSetting({
                success(settingdata) {
                  if(settingdata.authSetting['scope.writePhotosAlbum']) {
                    uni.saveImageToPhotosAlbum({
                      filePath,
                      success: function() {
                        resolve(true);
                      }
                    });
                  } else {
                    // uni.showModal({
                    //   title: '提示',
                    //   content: '授权失败，请稍后重新获取',
                    //   showCancel: false
                    // });
                    console.warn('writePhotosAlbum fail:>> ', false);
                    reject(false);
                  }
                }
              });
            }
          }
        });
      }
    });
  });
}

/**
 * 保存网络图片到本地
 */
export function saveNetImageToPhotosAlbum(url: string) {
  if(!url) return console.warn('url is empty:>> ');
  uni.downloadFile({
    url,
    success: res => {
      saveImageToPhotosAlbum(res.tempFilePath);
    }
  });
}

