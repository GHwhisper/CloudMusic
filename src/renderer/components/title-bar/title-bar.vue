<template>
    <div class="title-bar">
        <div class="title"><router-link to="/">网易云音乐</router-link></div>
        <div class="options">
            <span @click="minimizeWin"><a-icon class="a-icon" type="minus" /></span>
            <span @click="maximizeWin"><a-icon class="a-icon" :type="!isMaximized ? 'border' : 'switcher'" /></span>
            <span @click="closeWin"><a-icon class="a-icon" type="close" /></span>
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
        height 50px
        drag()
        .title
            float left
            line-height 50px
            cursor pointer
            margin-left 20px
            font-size $font-size-large
            no-drag()
            & a
                color $color-white
        .options
            float right
            margin-right 15px
            span
                no-drag()
                padding 0 5px
                line-height 50px
                display inline-block
                height 50px
                float left
                cursor pointer
                color $color-gray-light
                font-size $font-size-medium
                &:hover
                    .a-icon
                        color $color-white
</style>
