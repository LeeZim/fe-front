<template>
  <div class="footer">
    <slot></slot>
  </div>
</template>

<script lang="ts">
export default {
  name: 'Lfooter'
}
</script>

<style scoped>
.footer {
  background-color: yellow;
  width: 100%;
  position: fixed;
  bottom: 0px;
}
</style>
