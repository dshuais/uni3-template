<script setup lang="ts">
import { PAGE, PAGE_COMMON, PAGE_USER } from '@/constant/PAGE';

const title = ref('Hello');

const urls = {
  webview: PAGE.WEBVIEW,
  detail: PAGE_COMMON.DETAIL,
  login: PAGE_USER.LOGIN,
  register: PAGE.REGISTER
};

function jump(type: keyof typeof urls) {
  uni.navigateTo({
    url: urls[type]
  });
}

</script>

<template>
  <view class="content">
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>
    <button @click="jump('webview')">去common-webview</button>
    <button @click="jump('detail')">去common-detail</button>
    <button @click="jump('login')">去common-login</button>
    <button @click="jump('register')">去common-register</button>
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
