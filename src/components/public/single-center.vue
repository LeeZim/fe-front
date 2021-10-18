<template>
  <div class="c-single-center">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CSingleCenter'
}
</script>

<style lang="stylus">
.c-single-center
  grid($align-items: center)
  height: 100%
</style>
