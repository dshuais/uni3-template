/*
 * @Author: dushuai
 * @Date: 2023-03-19 22:08:30
 * @LastEditors: dushuai
 * @LastEditTime: 2024-03-29 17:01:49
 * @Description: 接口response data类型文件
 */

/**
 * 接口response data类型
 */
declare namespace Res {
  /** response */
  interface Response<T = unknown> {
    code: number,
    data: T,
    msg: string
  }

  type testData = {
    name: string
    age: number
    sex: string
  }

}
