<template>
    <div class="home">
        <a-tabs default-active-key="1" class="a-tabs">
            <a-tab-pane key="1" tab="个性推荐">
                <personalized :banners="banners"></personalized>
            </a-tab-pane>
            <a-tab-pane key="2" tab="歌单">
                歌单
            </a-tab-pane>
            <a-tab-pane key="3" tab="主播电台">
                主播电台
            </a-tab-pane>
            <a-tab-pane key="4" tab="排行榜">
                排行榜
            </a-tab-pane>
            <a-tab-pane key="5" tab="歌手">
                歌手
            </a-tab-pane>
            <a-tab-pane key="6" tab="最新音乐">
                最新音乐
            </a-tab-pane>
        </a-tabs>
    </div>
</template>

<script>
  import { getBanner, getDiscovery } from 'api/discovery'
  import { SUCCESS } from 'api/config'
  import Personalized from './components/personalized'

  export default {
    name: 'home',
    components: {
      Personalized
    },
    data () {
      return {
        banners: []
      }
    },
    created () {
      getBanner().then(res => {
        if (res.status === SUCCESS && res.data.code === SUCCESS) {
          this.banners = res.data.banners
        }
      })
      getDiscovery().then(res => {
        if (res.status === SUCCESS && res.data.code === SUCCESS) {
          console.log(res.data)
        }
      })
    },
    methods: {

    }
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"

    // 修改样式
    .a-tabs >>> .ant-tabs-nav
        position relative
        left 50%
        transform translateX(-50%)
        & > div:first-child .ant-tabs-tab:not(:last-child)
            margin-right 42px
    .a-tabs >>> .ant-tabs-tab
        padding-left 0
        padding-right 0
        font-size $font-size-medium-l

    .home
        padding 0 30px
        height 100%
        overflow-y scroll
</style>
