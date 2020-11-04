<template>
    <div class="nav">
        <a-menu
                :default-selected-keys="['1']"
                :open-keys.sync="openKeys"
                mode="inline"
                class="a-menu"
        >
            <a-menu-item key="1"><router-link to="/">发现音乐</router-link></a-menu-item>
            <a-menu-item key="2"><router-link to="">视频</router-link></a-menu-item>
            <a-menu-item key="3"><router-link to="">朋友</router-link></a-menu-item>
            <a-menu-item key="4"><router-link to="">直播</router-link></a-menu-item>
            <a-menu-item key="5"><router-link to="/private">私人FM</router-link></a-menu-item>
            <a-menu-item-group key="myMusic">
                <template slot="title"><span>我的音乐</span></template>
                <a-menu-item key="6"><i class="iconfont icon-yinyue icon"></i>本地音乐</a-menu-item>
                <a-menu-item key="7"><i class="iconfont icon-xiazaipt icon"></i>下载管理</a-menu-item>
                <a-menu-item key="8"><i class="iconfont icon-yunpan icon"></i>我的音乐云盘</a-menu-item>
                <a-menu-item key="9"><i class="iconfont icon-diantai icon"></i>我的电台</a-menu-item>
                <a-menu-item key="10"><i class="iconfont icon-wodeshoucang icon"></i>我的收藏</a-menu-item>
            </a-menu-item-group>
            <a-sub-menu key="myPlaylist">
                <span slot="title"><span>创建的歌单</span></span>
                <a-menu-item key="11"><i class="iconfont icon-xihuan-kongpt icon"></i>我喜欢的音乐</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="myCollection">
                <span slot="title"><span>收藏的歌单</span></span>
                <a-menu-item key="12"><i class="iconfont icon-yinle-liebiao icon"></i>收藏1</a-menu-item>
                <a-menu-item key="13"><i class="iconfont icon-yinle-liebiao icon"></i>收藏2</a-menu-item>
                <a-menu-item key="14"><i class="iconfont icon-yinle-liebiao icon"></i>收藏3</a-menu-item>
                <a-menu-item key="15"><i class="iconfont icon-yinle-liebiao icon"></i>收藏4</a-menu-item>
            </a-sub-menu>
        </a-menu>
    </div>
</template>

<script>
  export default {
    name: 'navigation',
    props: {},
    data () {
      return {
        current: ['mail'],
        openKeys: ['myMusic', 'myPlaylist', 'myCollection']
      }
    },
    methods: {}
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"

    // 修改样式
    .a-menu
        border 1px solid transparent
        padding 10px
    .a-menu >>> .ant-menu-item
        font-size $font-size-medium
        color $color-black-light
        border-radius 5px
        & > a
            color $color-black-light
            &:hover
                color $color-black
        &.ant-menu-item-selected
            color $color-black
            background-color $color-nav-hover-bg
            & > a
                color $color-black-light
                font-weight $font-weight-bold
                font-size $font-size-large
        &:hover
            color $color-black
            background-color $color-nav-hover-bg
        &::after
            border-right 0
            transition none
        &:not(:last-child)
            margin-bottom 0
    .a-menu >>> .ant-menu-submenu-title
        color $color-subtitle
        padding-left 16px !important
    .a-menu >>> .ant-menu-item
        padding-left 16px !important

    .nav
        width 220px
        height 100%
        border-right 1px solid $color-border
        overflow-y auto
        box-sizing border-box
    .icon
        font-size 17px
        color $color-black-light
        margin-right 14px
</style>
