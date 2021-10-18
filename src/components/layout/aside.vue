<template>
  <div class="aside">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Laside'
}
</script>

<style lang="stylus" scoped>
.aside {
  flex: 0
  width: 50px
}
</style>
