import { un as reqest, type UnResponse } from '@uni-helper/uni-network';
import { useAppStore } from '@/store';
import ErrorCodeHandle from './requestCode';

type R<T> = Res.Response<T>;

/** 不需要处理异常白名单 */
const whiteList: string[] = [''];

/**
 * 创建axios实例
 */
const service = reqest.create({
  baseUrl: import.meta.env.VITE_APP_BASE_URL,
  timeout: 20000
});

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做些什么

    const { token } = storeToRefs(useAppStore());

    if(token.value) {
      if(!config.headers) config.headers = {};
      config.headers['token'] = `${token.value}`;
    }

    return config;
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
service.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数
    // 对响应数据做点什么

    const url = response.config?.url as string;

    if(whiteList.some(e => e.match(url))) {
      if(url) console.log('not processing white list url:>> ', url);
      else console.log('request error, no url:>> ', response);

    } else {
      ErrorCodeHandle(response as UnResponse<Res.Response>);
    }

    // 正常请求下 errno 为 undefined
    // if(response.errno) {
    //   return Promise.reject(response.errMsg);
    // } else
    if(response.data && (response.data as Res.Response).code === 200) {
      return response;
    } else {
      console.error('response code error:>> ', response);
      return Promise.reject(response);
    }
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数
    // 对响应错误做点什么
    if(error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);

/**
 * 基础的请求
*/
/** POST表单格式 */
export function post<T>(url: string, params?: object) {
  return new Promise<R<T>>((resolve, reject) => {
    service
      .post<R<T>>(url, params)
      .then(
        (response) => {
          response && resolve(response.data as R<T>);
        },
        (err) => {
          reject(err);
        }
      )
      .catch((err) => {
        reject(err);
      });
  });
}

/** POST表单格式 可根据需要封装 目前屏蔽因为不想安装qs库 */
// export function postForm<T>(url: string, params?: object): Promise<Res.Response<T>> {
//   return new Promise<Res.Response<T>>((resolve, reject) => {
//     type Response = Res.Response<T>;
//     service
//       .post<Response>(url, qs.stringify(params), {
//         headers: {
//           'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
//         }
//       })
//       .then(
//         (response) => {
//           response && resolve(response.data as Response);
//         },
//         (err) => {
//           reject(err);
//         }
//       )
//       .catch((err) => {
//         reject(err);
//       });
//   });
// }

/** GET请求 */
export function get<T>(url: string, params?: object) {
  return new Promise<R<T>>((resolve, reject) => {
    service
      .get<R<T>>(url, { params })
      .then(
        (response) => {
          response && resolve(response.data as R<T>);
        },
        (err) => {
          reject(err);
        }
      )
      .catch((error) => {
        reject(error);
      });
  });
}

/** PUT请求 */
export function put<T>(url: string, params?: object) {
  return new Promise<R<T>>((resolve, reject) => {
    service
      .put<R<T>>(url, params)
      .then(
        (response) => {
          response && resolve(response.data as R<T>);
        },
        (err) => {
          reject(err);
        }
      )
      .catch((error) => {
        reject(error);
      });
  });
}

/** DELETE请求 */
export function del<T>(url: string, params?: object) {
  return new Promise<R<T>>((resolve, reject) => {
    service
      .delete<R<T>>(url, { params })
      .then(
        (response) => {
          response && resolve(response.data as R<T>);
        },
        (err) => {
          reject(err);
        }
      )
      .catch((error) => {
        reject(error);
      });
  });
}
