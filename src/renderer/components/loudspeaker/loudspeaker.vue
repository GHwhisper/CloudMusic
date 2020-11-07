<template>
    <div class="speaker">
        <i class="iconfont icon-yangshengqi"></i>
        <progress-bar class="progress-bar"></progress-bar>
    </div>
</template>

<script>
  import ProgressBar from 'components/progress-bar/progress-bar'
  export default {
    name: 'loudspeaker',
    components: {
      ProgressBar
    }
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"

    .speaker
        display flex
        align-items center
        i
            flex-shrink 0
            margin-right 3px
            font-size 24px
            line-height 1
            cursor pointer
        .progress-bar
            width 60px
            &:hover
                & >>> .bar-inner
                    height 4px
                & >>> .progress-btn
                    width 8px
                    height @width
</style>
