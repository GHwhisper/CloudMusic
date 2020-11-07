<template>
    <div class="progress-bar">
        <div class="bar-inner">
            <div class="progress"></div>
            <div class="progress-btn"></div>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'progress-bar',
    props: {
      percent: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"

    .progress-bar
        width 100%
        height 10px
        position relative
        cursor pointer
        .bar-inner
            width 100%
            height 4px
            background $color-border
            border-radius 2px
            position absolute
            top 50%
            transform translateY(-50%)
            .progress
                position absolute
                height 100%
                background-color $color-background
            .progress-btn
                width 10px
                height @width
                border-radius 50%
                background-color $color-background
                position absolute
                left 0
                top 50%
                transform translateY(-50%)
                opacity 0
        &:hover
            .bar-inner
                height 6px
                border-radius 3px
            .progress-btn
                opacity 1
</style>
