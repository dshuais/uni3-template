<!--
 * @Author: dushuais
 * @Date: 2024-08-09 21:14:55
 * @LastEditors: dushuais 1137896420@qq.com
 * @LastEditTime: 2024-08-09 22:18:51
 * @Description: home
-->
<script setup lang="ts">
import { useAppStore } from '@/store';
import { PAGE, PAGE_COMMON, PAGE_MAIN, PAGE_USER } from '@/constant/PAGE';

const title = ref('Hello');

const { token } = storeToRefs(useAppStore());
const { SET_TOKEN, REMOVE_TOKEN } = useAppStore();

const urls = {
  webview: PAGE.WEBVIEW,
  detail: PAGE_COMMON.DETAIL,
  login: PAGE_USER.LOGIN,
  register: PAGE.REGISTER,
  personal: PAGE_MAIN.PERSONAL
};

function jump(type: keyof typeof urls) {
  if(type === 'personal') {
    uni.switchTab({
      url: urls[type]
    });
    return;
  }
  uni.navigateTo({
    url: urls[type]
  });
}

</script>

<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{ title }} token: {{ token }}</text>
    </view>
    <button @click="SET_TOKEN('123456')">SET_TOKEN</button>
    <button @click="REMOVE_TOKEN">REMOVE_TOKEN</button>
    <button @click="jump('webview')">去common-webview</button>
    <button @click="jump('detail')">去common-detail</button>
    <button @click="jump('login')">去common-login</button>
    <button @click="jump('register')">去common-register</button>
    <button @click="jump('personal')">去personal</button>
  </view>
</template>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
