<template>
    <div class="volume">
        <i class="iconfont icon-bofang1"></i>
        <span class="count">{{countFix(count)}}</span>
    </div>
</template>

<script>
  import { countFix } from 'common/js/util'
  export default {
    name: 'play-volume',
    props: {
      count: {
        type: Number,
        default: 0
      }
    },
    methods: {
      countFix
    }
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"
    .volume
        color $color-white
        line-height 14px
        i
            font-size 14px
        .count
            font-size $font-size-small
            margin-left 2px
</style>
