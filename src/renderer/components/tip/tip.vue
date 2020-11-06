<template>
    <transition name="tip-fade">
        <div class="tool-tip" v-if="show && this.currentName === name">{{text}}</div>
    </transition>
</template>

<script>
  export default {
    name: 'tip',
    props: {
      name: {
        type: String,
        required: true
      },
      text: {
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
        this.currentName = name
        this.show = true
        if (!this.timeout) {
          this.timeout = setTimeout(() => {
            this.show = false
            this.timeout = null
          }, this.duration)
        }
      })
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
