<template>
  <div class="header bgColor">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'L-header'
}
</script>

<style scoped>
.header {
  width: 100%;
  top: 0;
  position: fixed;
}
</style>
