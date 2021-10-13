<template>
  <div class="c-box-skin" :class="type ? `c-box-skin--${type}` : ''">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'CBoxSkin',
  props: {
    type: {
      validator(value) {
        return ['top', 'bottom'].indexOf(value) !== -1
      }
    }
  }
}
</script>

<style lang="stylus">
.c-box-skin
  bgColor()
  &--top
    b(top, $border-base)
  &--bottom
    b(bottom, $border-base)
</style>
