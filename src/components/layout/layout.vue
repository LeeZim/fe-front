<template>
  <div class="layout" :class="{ 'layout--horizontal': horizontal }">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'L-layout',
  props: {
    horizontal: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style scoped lang="stylus">
.layout {
  display: flex;
  flex-direction: column;
  &--horizontal {
    flex-direction: row
  }
}
</style>
