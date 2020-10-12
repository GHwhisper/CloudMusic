<template>
    <span class="play">
        <i class="iconfont icon-bofang play-icon"></i>
    </span>
</template>

<script>
  export default {
    name: 'play'
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"

    .play
        width 34px
        height 34px
        display inline-block
        background-color $color-white
        opacity .9
        border-radius 50%
        cursor pointer
        position relative
        .play-icon
            font-size 15px
            color $color-background
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
</style>
