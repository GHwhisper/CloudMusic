<template>
    <div class="nav">
        <a-menu
                :default-selected-keys="['1']"
                :open-keys.sync="openKeys"
                mode="inline"
                class="a-menu"
        >
            <a-sub-menu key="recommend" >
                <span slot="title"><span>推荐</span></span>
                <a-menu-item key="1"><router-link to="/">发现音乐</router-link></a-menu-item>
                <a-menu-item key="2"><router-link to="/private">私人FM</router-link></a-menu-item>
                <a-menu-item key="3">LOOK直播</a-menu-item>
                <a-menu-item key="4">视频</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="myMusic">
                <span slot="title"><span>我的音乐</span></span>
                <a-menu-item key="5">下载管理</a-menu-item>
                <a-menu-item key="6">我的音乐云盘</a-menu-item>
                <a-menu-item key="7">我的电台</a-menu-item>
                <a-menu-item key="8">我的收藏</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="myPlaylist">
                <span slot="title"><span>创建的歌单</span></span>
                <a-menu-item key="9">我喜欢的音乐</a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="myCollection">
                <span slot="title"><span>收藏的歌单</span></span>
                <a-menu-item key="10">收藏1</a-menu-item>
                <a-menu-item key="11">收藏2</a-menu-item>
                <a-menu-item key="12">收藏3</a-menu-item>
                <a-menu-item key="13">收藏4</a-menu-item>
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
        openKeys: ['recommend', 'myMusic', 'myPlaylist', 'myCollection']
      }
    },
    methods: {}
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable.styl"

    // 修改样式
    .a-menu
        border 1px solid transparent

    .nav
        width 220px
        height 100%
        border-right 1px solid $color-border
        overflow-y auto
        box-sizing border-box
</style>
