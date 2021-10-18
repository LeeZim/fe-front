<template>
  <CBoxSkin class="c-box-skin--bgColor" type="bottom" bTest>
    <CSingleCenter>
      <hamburger-button
        theme="multi-color"
        size="28"
        :fill="['#a3a399', '#cf981a', '#FFF', '#43CCF8']"
        :strokeWidth="2"
        ml15
        mr10
      />
      <CSingleCenter class="search" radius3>
        <searchIcon
          theme="multi-color"
          size="20"
          :fill="['#a3a399', '#ffffff', '#a3a399', '#43CCF8']"
          :strokeWidth="2"
          ml10
          mr5
        />
        <input mr10 />
      </CSingleCenter>
      <more-two
        theme="multi-color"
        size="24"
        :fill="['#a3a399', '#ffffff', '#a3a399', '#43CCF8']"
        :strokeWidth="2"
        ml10
        mr5
      />
    </CSingleCenter>
  </CBoxSkin>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { HamburgerButton, Search as searchIcon, MoreTwo } from '@icon-park/vue-next'

export default defineComponent({
  name: 'Search',
  setup() {},
  components: {
    HamburgerButton,
    searchIcon,
    MoreTwo
  }
})
</script>

<style lang="stylus">
@import './search.styl'
</style>
