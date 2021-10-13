<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
// import { DEFAULT_ICON_CONFIGS, IconProvider } from '@icon-park/vue-next'

import { onMounted } from 'vue'
// import HelloWorld from './components/HelloWorld.vue'
const change = (color: 'red' | 'blue' | 'green') => {
  window.document.documentElement.setAttribute('data-theme', color)
}
// IconProvider({ ...DEFAULT_ICON_CONFIGS, prefix: 'icon' })
onMounted(() => {
  window.document.documentElement.setAttribute('data-theme', 'blue')
})
</script>

<template>
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <button @click="change('red')">RED</button>
  <button @click="change('blue')">BLUE</button>
  <button @click="change('green')">GREEN</button>
  <router-view> </router-view>
</template>

<style lang="stylus">
// @import "@/style/settings/index.styl"
</style>
