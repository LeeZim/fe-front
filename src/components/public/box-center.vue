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
  width: 100px
  height: 100px
  bgColor(#123456)
</style>
