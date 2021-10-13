<template>
  <L-layout horizontal>
    <L-header>
      <CSingleCenter>
        <div style="width: 50px; height: 20px; background-color: red" mh10></div>
        <div style="width: 50px; height: 10px; background-color: pink" mh10></div>
        <div style="width: 50px; height: 30px; background-color: green" mh10></div>
      </CSingleCenter>
      <CBoxCenter>
        <div style="width: 100px; height: 100px; background-color: gray"></div>
      </CBoxCenter>
    </L-header>
    <L-main> </L-main>
    <L-footer>
      <CBoxSkin type="top">
        <div style="width: 100%; height: 30px" bgWhite><Home theme="filled" /></div>
      </CBoxSkin>
    </L-footer>
  </L-layout>
</template>

<script lang="ts">
import { Home } from '@icon-park/vue-next'

export default {
  components: {
    Home
  }
}
</script>
