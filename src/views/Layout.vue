<template>
  <L-layout horizontal>
    <L-header>
      <CSingleCenter>
        <div style="width: 50px; height: 20px; background-color: red" mh10></div>
        <div style="width: 50px; height: 10px; background-color: pink" mh10></div>
        <div style="width: 50px; height: 30px; background-color: green" mh10></div>
      </CSingleCenter>
      <CBoxCenter>
        <!-- <div style="width: 100px; height: 100px; background-color: gray"></div> -->
      </CBoxCenter>
    </L-header>
    <L-main>
      <div class="scroll-banner">
        <div style="height: 200px; width: 100%" bgRed></div>
        <div style="height: 200px; width: 100%" bgBlue></div>
        <div style="height: 200px; width: 100%" bgGreen></div>
        <div style="height: 200px; width: 100%" bgYellow></div>
      </div>
    </L-main>
    <L-footer>
      <CBoxSkin type="top">
        <el-row>
          <el-col :span="6">
            <CBoxCenter><home theme="outline" size="24" fill="#333" /></CBoxCenter>
          </el-col>
          <el-col :span="6">
            <CBoxCenter><facetime theme="outline" size="24" fill="#333" /></CBoxCenter>
          </el-col>
          <el-col :span="6">
            <CBoxCenter><weixin-market theme="outline" size="24" fill="#333" /></CBoxCenter>
          </el-col>
          <el-col :span="6">
            <CBoxCenter><me theme="outline" size="24" fill="#333" /></CBoxCenter>
          </el-col>
        </el-row>
      </CBoxSkin>
    </L-footer>
  </L-layout>
</template>

<script lang="ts">
import { Home, Facetime, WeixinMarket, Me } from '@icon-park/vue-next'

export default {
  setup() {
    // Home.props.fill = '#FF5777'
    console.log(Home)
  },
  components: {
    Home,
    Facetime,
    WeixinMarket,
    Me
  }
}
</script>
<style lang="stylus">
.scroll-banner
  scroll-snap-type : x mandatory
  overflow :auto
  white-space : nowrap
.scroll-banner div
  display: inline-block
  scroll-snap-align : center
  scroll-snap-stop : always
</style>
