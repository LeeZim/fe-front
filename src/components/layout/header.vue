<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Lheader'
}
</script>

<style scoped>
.header {
  width: 100%;
  top: 0;
  position: fixed;
}
</style>
