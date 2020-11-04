<template>
    <div class="player">
        <div class="left">
            <div class="img-con">
                <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2801499355,2429956962&fm=26&gp=0.jpg" alt="">
            </div>
            <div class="info">
                <div class="name"><span>房间</span><like></like></div>
                <div class="singer">刘瑞琪</div>
            </div>
        </div>
        <div class="center">
            <div class="content">
                <div class="operators">

                </div>
                <div class="progress">
                    <span class="time time-l">00:00</span>
                    <progress-bar></progress-bar>
                    <span class="time time-r">05:00</span>
                </div>
            </div>
        </div>
        <div class="right"></div>
    </div>
</template>

<script>
  import Like from 'components/like/like'
  import ProgressBar from 'components/progress-bar/progress-bar'
  export default {
    name: 'bottom-player',
    components: {
      Like,
      ProgressBar
    },
    props: {

    }
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"
    @import "~common/styles/mixins"

    .player
        height 80px
        background-color $color-bottom-player-bg
        position fixed
        bottom 0
        left 0
        right 0
        box-sizing border-box
        border-top 1px solid $color-border
        display flex
        .left
            width 280px
            flex-shrink 0
            background-color lightblue
            display flex
            box-sizing border-box
            padding 13px
            .img-con
                width 54px
                height @width
                background-color: lightcoral
                border-radius $border-radius-cover
                overflow hidden
                margin-right 10px
                flex-shrink 0
                img
                    width 100%
                    height 100%
            .info
                display flex
                flex-direction column
                justify-content space-between
                overflow hidden
                .name
                    display flex
                    span
                        font-size $font-size-medium-l
                        margin-right 10px
                        cursor pointer
                        color $color-black-light
                        single-line()
                        &:hover
                            color $color-black
                .singer
                    font-size $font-size-small
                    cursor pointer
                    single-line()
        .center
            flex 1
            .content
                width 500px
                height 100%
                background-color lightblue
                margin 0 auto
                .progress
                    display flex
                    justify-content space-between
                    align-items center
        .right
            width 280px
            flex-shrink 0
            background-color: lightcoral
</style>
