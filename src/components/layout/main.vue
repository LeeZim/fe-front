<template>
  <div class="main">
    MAIN
    <div class="content"></div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'L-main'
}
</script>

<style scoped lang="stylus">
.main {
  background-color: blue;
  flex: 1;
  overflow: auto;
}
.content {
  background-color: $color-text-primary;
  width: 100%;
  height: 2000px;
  &--fixed {
    background-color: #f0f0f0;
  }
}
</style>
