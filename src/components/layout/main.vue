<template>
  <div class="main">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Lmain'
}
</script>

<style scoped lang="stylus">
.main {
  flex: 1;
  overflow: auto;
}
</style>
