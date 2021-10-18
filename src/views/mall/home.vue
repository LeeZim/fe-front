<template>
  <Llayout>
    <Lheader>
      <Launch />
      <Search />
    </Lheader>
    <Lmain></Lmain>
    <Lfooter>
      <Menu />
    </Lfooter>
  </Llayout>
</template>

<script setup lang="ts">
import Launch from '@/components/launch/launch.vue'
import Search from '@/components/search/search.vue'
import Menu from '@/components/footerMenu/footerMenu.vue'
</script>

<style lang="stylus"></style>
