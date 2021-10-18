<template>
  <div class="c-box-center" box-center>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CBoxCenter'
}
</script>

<style lang="stylus">
.c-box-center
  bgColor(#fff)
  b('right', $border-base)
</style>
