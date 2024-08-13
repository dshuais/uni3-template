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
    BaseTest
    <view>msg: {{ msg }}</view>
  </div>
</template>

<style scoped></style>