<script setup lang="ts">

defineProps({
  msg: {
    type: String,
    required: true
  }
});

</script>

<template>
  <div>
    BaseTest2222
    <view>msg: {{ msg }}</view>
  </div>
</template>

<style scoped></style>