<template>
    <div class="title-bar">
        <div class="title">
            <i class="iconfont icon-wangyiyunyinle logo"></i>
            <router-link to="/">网易云音乐</router-link>
        </div>
        <div class="center">
            <span class="btn" @click="goBack"><i class="iconfont icon-houtui"></i></span>
            <span class="btn" @click="goForward"><i class="iconfont icon-qianji"></i></span>
        </div>
        <div class="options">
            <span @click="minimizeWin"><i class="iconfont icon-zuixiaohua icon"></i></span>
            <span @click="maximizeWin"><i :class="['iconfont', !isMaximized ? 'icon-chuangkouhua' : 'icon-huanyuan', 'icon']"></i></span>
            <span @click="closeWin"><i class="iconfont icon-guanbi icon"></i></span>
        </div>
    </div>
</template>

<script>
  import { ipcRenderer } from 'electron'

  export default {
    name: 'title-bar',
    props: {

    },
    data () {
      return {
        isMaximized: false // 窗口最大化
      }
    },
    created () {
      ipcRenderer.on('main-window-unmax', () => {
        this.isMaximized = false
      })
      ipcRenderer.on('main-window-max', () => {
        this.isMaximized = true
      })
    },
    methods: {
      minimizeWin () { // 最小化
        ipcRenderer.send('window-min')
      },
      maximizeWin () { // 最大化
        // this.isMaximized = !this.isMaximized
        ipcRenderer.send('window-max')
      },
      closeWin () { // 关闭窗口
        this.$confirm({
          title: '确认关闭网易云音乐吗？',
          okText: '关闭',
          okType: 'danger',
          cancelText: '取消',
          centered: true,
          onOk() {
            ipcRenderer.send('window-close')
          }
        })
      },
      goBack () {
        history.back()
      },
      goForward () {
        history.forward()
      }
    }
  }
</script>

<style lang="stylus" scoped>
    @import '~common/styles/variable'
    @import '~common/styles/mixins'

    .title-bar
        width 100%
        background-color $color-background
        height $height-title-bar
        position relative
        drag()
        .title
            float left
            line-height $height-title-bar
            cursor pointer
            margin-left 20px
            font-size $font-size-large
            color $color-white
            no-drag()
            .logo
                font-size 26px
                position relative
                top 3px
            a
                color $color-white
                line-height 1
                margin-left 2px
        .options
            float right
            margin-right 15px
            span
                no-drag()
                padding 0 12px
                line-height $height-title-bar
                display inline-block
                height $height-title-bar
                float left
                cursor pointer
                color $color-gray-light
                font-size $font-size-medium
                &:hover
                    .icon
                        color $color-white
        .center
            float left
            height $height-title-bar
            margin-left 105px
            .btn
                no-drag()
                display inline-block
                width 28px
                height @width
                background-color $color-back-forward-bg
                border-radius 50%
                text-align center
                cursor pointer
                position relative
                top 50%
                transform translateY(-50%)
                i
                    color $color-white
                    font-size 10px
                    line-height 28px
                &:last-child
                    margin-left 5px
</style>
