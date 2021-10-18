<template>
  <CBoxSkin class="c-box-skin--bgColor" type="bottom">
    <CSingleCenter>
      <img
        class="launch-logo"
        src="https://s10.mogucdn.com/mlcdn/c45406/190219_4ii32ja6gi9hdeb56k2487ce7eh24_60x60.png"
        alt=""
        ml15
        mr10
      />
      <div class="launch-download">
        <span>蘑菇街 总有高手帮你挑</span>
        <div class="launch-download-star">
          <star
            theme="multi-color"
            size="10"
            :fill="['#a3a399', '#e7ae33', '#a3a399', '#43CCF8']"
            v-for="i of 5"
            mr2
          />
          <span ml10 style="color: rgb(142, 142, 146)">超过2亿用户已下载</span>
        </div>
      </div>
      <CSingleCenter class="launch-button" radius3>打开APP</CSingleCenter>
    </CSingleCenter>
  </CBoxSkin>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Star } from '@icon-park/vue-next'

export default defineComponent({
  name: 'Launch',
  setup() {},
  components: {
    Star
  }
})
</script>

<style lang="stylus">
@import './launch.styl'
</style>
