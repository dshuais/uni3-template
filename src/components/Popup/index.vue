<script setup lang="ts">

function handleLog() {
  console.log('Popup组件');
}

function handleLog2() {
  console.log('Popup组件2');
}

function handle2() {
  console.log('Popup组件2');
}

defineExpose({
  handleLog,
  handleLog2,
  handle2
});
</script>

<template>
  <div>
    Popup组件
  </div>
</template>

<style scoped>

</style>
