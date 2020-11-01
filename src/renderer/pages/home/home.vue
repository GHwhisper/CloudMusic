<template>
    <div class="home">
        <a-tabs default-active-key="1" class="a-tabs">
            <a-tab-pane key="1" tab="个性推荐">
                <personalized :banners="banners"></personalized>
                <song-list :list="songListRCMD"></song-list>
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
  import { getBanner, getSongListRCMD } from 'api/discovery'
  import { SUCCESS } from 'api/config'
  import Personalized from './components/personalized'
  import SongList from './components/recommend-song-list'

  export default {
    name: 'home',
    components: {
      Personalized,
      SongList
    },
    data () {
      return {
        banners: [],
        songListRCMD: []
      }
    },
    created () {
      getBanner().then(res => {
        if (res.status === SUCCESS && res.data.code === SUCCESS) {
          this.banners = res.data.banners
        }
      })
      getSongListRCMD().then(res => {
        if (res.status === SUCCESS && res.data.code === SUCCESS) {
          console.log(res.data)
          this.songListRCMD = res.data.result
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
        padding-top 20px
        font-size $font-size-medium-l
        color $color-black-light
        &:hover
            color $color-black
    .a-tabs >>> .ant-tabs-tab-active
        font-size $font-size-large
        font-weight $font-weight-bold
        color $color-black
    .a-tabs >>> .ant-tabs-bar
        border 0
        margin-bottom 24px
    .a-tabs >>> .ant-tabs-ink-bar
        height 3px
        background-color $color-background
        bottom 4px

    .home
        padding 0 30px
        height 100%
        overflow-y scroll
</style>
