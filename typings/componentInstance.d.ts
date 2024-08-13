/*
 * @Author: dushuai
 * @Date: 2023-03-22 15:49:49
 * @LastEditors: dushuai
 * @LastEditTime: 2023-03-22 16:58:57
 * @description: 统一定义组件类型 <ComponentInstance['组件名']> === <InstanceType<typeof 组件名>
 * @Read more: https://github.com/antfu/unplugin-vue-components/issues/601
 */
import type { GlobalComponents } from 'vue';

declare global {
  type ComponentInstance = {
    [Property in keyof GlobalComponents]: InstanceType<GlobalComponents[Property]>
  }
}
