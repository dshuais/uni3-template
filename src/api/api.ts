/*
 * @Author: dushuai
 * @Date: 2023-03-15 14:44:06
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-12 21:04:43
 * @description: api
 */
import { get, post } from '@/axios';

/** 测试接口 */
export const GetTest = (params: object) => get('test', params);

export const GetTest2 = (params: object) => post<Res.testData>('test', params);

export const GetTest3 = (params: object) => post('testJSON', params);

export const GetTest4 = () => post('testError');
