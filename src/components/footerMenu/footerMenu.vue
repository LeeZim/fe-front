<template>
  <CBoxSkin class="c-box-skin--bgColor" type="top">
    <el-row>
      <el-col class="menuTitle" :span="6" v-for="value in menuList">
        <CSingleCenter class="title">{{ value }}</CSingleCenter>
      </el-col>
    </el-row>
  </CBoxSkin>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Menu',
  setup() {
    return {
      menuList: ['首页', '商城', '直播', '我']
    }
  }
})
</script>
<style lang="stylus">
@import './footerMenu.styl'
</style>
