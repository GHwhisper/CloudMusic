<template>
    <transition name="tip-fade">
        <div class="tool-tip" v-if="show && this.currentName === name">{{text}}</div>
    </transition>
</template>

<script>
  export default {
    name: 'tip',
    props: {
      name: { // 多个不同用途的tip同时存在时，显示哪一个
        type: String,
        required: true
      },
      text: { // 内容
        type: String,
        required: true
      },
      duration: {
        type: Number,
        default: 500
      }
    },
    data () {
      return {
        show: false,
        currentName: null
      }
    },
    mounted () {
      this.bus.$on('showTip', (name) => {
        if (this.show && this.timeout) { // 解决连续触发时，tip会先执行完上一次动画，再执行本次动画，造成tip闪烁的问题
          clearTimeout(this.timeout)
          this._hideTip()
          return
        }
        this.currentName = name
        this.show = true
        if (!this.timeout) {
          this._hideTip()
        }
      })
    },
    methods: {
      _hideTip () {
        this.timeout = setTimeout(() => {
          this.show = false
          this.timeout = null
        }, this.duration)
      }
    },
    destroyed () {
      clearTimeout(this.timeout)
    }
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"

    .tool-tip
        display inline-block
        background-color $color-black-light
        color $color-white
        font-size $font-size-small-s
        line-height 1 !important
        padding 10px 30px
        z-index 1000

    @keyframes tip-fade
        0%
            opacity 0
        20%
            opacity 1
        100%
            opacity 1

    .tip-fade-leave-to
        animation tip-fade linear 1s reverse
    .tip-fade-enter-active
        animation tip-fade linear 1s
</style>
