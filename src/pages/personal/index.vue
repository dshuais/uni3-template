<!--
 * @Author: dushuai
 * @Date: 2024-08-09 21:14:55
 * @LastEditors: dushuai
 * @LastEditTime: 2024-08-12 21:44:12
 * @description: 个人中心
-->
<route lang="json5">
{
  style: {
    navigationBarTitleText: '个人中心',
    navigationStyle: 'custom'
  }
}
</route>

<script setup lang="ts">
// import Popup from '@/components/Popup/index.vue';
// import BaseTest2 from '@/components/Base/Test/index.vue';
import { GetTest, GetTest2, GetTest3, GetTest4 } from '@/api/api';

const title = ref('Hello');

const popupRef = ref<ComponentInstance['Popup']>();

function handleTest(ind: number) {
  const params = { user: 'dushuai' };
  switch (ind) {
    case 0:
      GetTest(params).then(res => console.log('GetTest:>> ', res));
      break;
    case 1:
      GetTest2(params).then((res) => {
        console.log('GetTest:>> ', res, res.data.name);
      });
      break;
    case 2:
      GetTest3(params).then((res) => console.log('GetTest:>> ', res));
      break;
    case 3:
      GetTest4().then((res) => console.log('GetTest:>> ', res));
      break;
  }
}

onMounted(() => {
  console.log('popupRef:>> ', popupRef.value);
  popupRef.value?.handleLog2();
});

</script>

<template>
  <view class="content">
    <!-- <image class="logo" src="/static/image/logo.png" /> -->
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>

    <button @click="handleTest(0)">http test1</button>
    <button @click="handleTest(1)">http test2</button>
    <button @click="handleTest(2)">http test3</button>
    <button @click="handleTest(3)">http test4</button>

    <BaseTest msg="我是BaseTest" />
    <Popup ref="popupRef" />
    <BaseTest2 :msg="'personal传递'" />
    <view>分界线</view>
    自动导入
    <BaseTest2 msg="给自动导入组件的传递" />
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
