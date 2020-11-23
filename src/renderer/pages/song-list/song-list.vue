<template>
    <div>
        <div class="head">
            <div class="cover">
                <img :src="songlist.cover" alt="">
            </div>
            <div class="detail">
                <h1>
                    <i class="iconfont icon-gedan"></i>
                    <span class="name">{{songlist.name}}</span>
                </h1>
                <div class="author" v-if="songlist.creator">
                    <avatar :src="songlist.creator.avatar"></avatar>
                    <router-link to="" class="author-name">{{songlist.creator.nickname}}</router-link>
                    <span class="create-date">{{songlist.createTime}}创建</span>
                </div>
                <div class="operators">
                    <a-radio-group>
                        <a-radio-button value="播放全部"><i class="iconfont icon-bofang pre-icon"></i>播放全部</a-radio-button>
                        <a-radio-button value="添加全部到播放列表"><i class="iconfont icon-jia"></i></a-radio-button>
                    </a-radio-group>
                    <a-button type="round"><i class="iconfont icon-tianjiawenjianjia pre-icon round-btn-icon"></i>收藏({{songlist.subscribedCount}})</a-button>
                    <a-button type="round"><i class="iconfont icon-fenxiang pre-icon round-btn-icon"></i>分享({{songlist.shareCount}})</a-button>
                    <a-button type="round"><i class="iconfont icon-xiazaipt pre-icon round-btn-icon"></i>下载全部</a-button>
                </div>
                <div class="info">
                    <div class="row-item label">
                        <span class="title">标签：</span>
                        <span>
                            <router-link to="">散步</router-link>/
                            <router-link to="">浪漫</router-link>/
                            <router-link to="">放松</router-link>
                        </span>
                    </div>
                    <div class="row-item played">
                        <span class="title">歌曲：</span>{{songlist.trackCount}}
                        <span class="title">播放：</span>{{songlist.playCount}}
                    </div>
                    <div class="row-item intro" :class="folding ? 'fold' : ''">
                        <span class="title">简介：</span>
                        <a-icon class="icon-toggle" :type="folding ? 'caret-up' : 'caret-down'" @click="toggleFoldIntro" />
                        <p class="intro-content" v-html="songlist.description"></p>
                    </div>
                </div>
            </div>
        </div>
        <a-tabs default-active-key="1">
            <a-tab-pane key="1" tab="歌曲列表">
                <list-table></list-table>
            </a-tab-pane>
            <a-tab-pane key="2" tab="评论">

            </a-tab-pane>
            <a-tab-pane key="3" tab="收藏者">

            </a-tab-pane>
        </a-tabs>
    </div>

</template>

<script>
  import { getSongList } from 'api/songlist'
  import Avatar from 'components/avatar/avatar'
  import ListTable from 'components/list-table/list-table'
  import SongList from 'common/js/songlist'
  import User from 'common/js/user'
  // import { countFix } from 'common/js/util'

  export default {
    name: 'song-list',
    components: {
      Avatar,
      ListTable
    },
    data () {
      return {
        folding: true,
        songlist: {} // 歌单信息
      }
    },
    created () {
      getSongList(this.$route.params.id).then(res => {
        let pl = res.data.playlist
        this.songlist = new SongList({
          id: pl.id,
          name: pl.name,
          cover: pl.coverImgUrl,
          creator: new User({
            id: pl.creator.userId,
            nickname: pl.creator.nickname,
            avatar: pl.creator.avatarUrl
          }),
          createTime: pl.createTime,
          subscribedCount: pl.subscribedCount,
          shareCount: pl.shareCount,
          tags: pl.tags,
          trackCount: pl.trackCount,
          playCount: pl.playCount,
          description: pl.description
        })
        console.log(res.data)
        console.log(this.songlist)
      })
    },
    methods: {
      toggleFoldIntro () {
        this.folding = !this.folding
      }
      // countFix
    }
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"
    @import "~common/styles/mixins"

    // 修改a-radio-group、a-radio-button组件样式
    .ant-radio-group
        font-size $font-size-medium
        &:hover .ant-radio-button-wrapper
            filter brightness(80%)
        .ant-radio-button-wrapper
            background-color $color-background
            color $color-white
            height 36px
            line-height @height
            &:first-child
                border-radius 100px 0 0 100px
                border none
                border-right 1px solid $color-border
            &:last-child
                border-radius 0 100px 100px 0
                border none
        .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)
            border-color $color-border
            box-shadow none
            color $color-white
            &:hover
                color $color-white
                box-shadow none
            &:focus-within
                outline none
    // 修改a-button组件样式
    .ant-btn-round
        height 36px
        font-size $font-size-medium
        margin-left 5px
        &:hover
        &:focus
            color $color-black-light
            border-color #d9d9d9

    .head
        padding 32px
        display flex
        .cover
            flex none
            width 202px
            height @width
            border-radius $border-radius-cover
            overflow hidden
            img
                width 100%
                height 100%
        .detail
            flex 1
            padding-left 24px
            overflow hidden
            h1
                margin 0
                padding 0
                line-height 1
                display flex
                i
                    line-height inherit
                    font-size 36px
                .name
                    font-size $font-size-song-list-name
                    line-height 36px
                    font-weight $font-weight-bold
                    margin-left 10px
                    single-line()
            .author
                display flex
                align-items center
                margin-top 5px
                .author-name, .create-date
                    font-size $font-size-small-s
                & > *:not(:first-child)
                    margin-left 10px
            .operators
                margin-top 10px
                .pre-icon
                    margin-right 5px
                .round-btn-icon
                    font-size 20px
            .info
                margin-top 12px
                .row-item
                    & > *
                        font-size $font-size-small
                        line-height 1.8
                    & > .title
                        color $color-black-light
                    &.played .title:not(:first-child)
                        margin-left 15px
                    &.intro
                        padding-right 30px
                        position relative
                        & .icon-toggle
                            position absolute
                            right 0
                            top 0
                            font-size 18px
                            color $color-gray-light
                        & p.intro-content
                            display inline
                            line-height 2
                            white-space pre-line
                        &.fold
                            line-clamp(1)
</style>
