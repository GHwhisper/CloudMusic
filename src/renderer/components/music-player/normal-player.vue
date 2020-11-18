<template>
    <transition name="normal">
        <div class="normal-player" v-show="normalPlayerVisibility">
            <div class="content">
                <div class="music-info">
                    <div class="cd-wrapper">
                        <div class="cd">
                            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2801499355,2429956962&fm=26&gp=0.jpg" alt="">
                        </div>
                        <div class="operators">
                            <div class="item-wrapper"><like class="icon"></like></div>
                            <div class="item-wrapper"><collect class="icon"></collect></div>
                            <div class="item-wrapper"><download class="icon"></download></div>
                            <div class="item-wrapper"><share class="icon"></share></div>
                        </div>
                    </div>
                    <div class="lyric-wrapper">

                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    </transition>
</template>

<script>
  import { mapGetters, mapMutations } from 'vuex'
  // import singlecover from 'images/singlecover.png'
  import Like from 'components/like/like'
  import Collect from 'components/collect/collect'
  import Download from 'components/download/download'
  import Share from 'components/share/share'

  export default {
    name: 'normal-player',
    components: {
      Like,
      Collect,
      Download,
      Share
    },
    data () {
      return {
        // singlecover
      }
    },
    methods: {
      enter (el, done) {
        console.log(1)
      },
      afterEnter () {
        console.log(2)
      },
      leave (el, done) {
        console.log(3)
      },
      afterLeave () {
        console.log(4)
      },
      ...mapMutations({
        setNormalPlayerVisibility: 'SET_NORMAL_PLAYER_VISIBILITY'
      })
    },
    computed: {
      ...mapGetters([
        'normalPlayerVisibility'
      ])
    }
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"

    .normal-player
        width 100%
        background-color $color-white
        position fixed
        top $height-title-bar
        bottom $height-bottom-player
        overflow hidden
        z-index 900
        overflow-y auto
        &.normal-enter, &.normal-leave-to
            opacity 0
            /*width 0*/
            /*top 1000px*/
        &.normal-enter-active, &.normal-leave-active
            transition all .5s
        .content
            width 950px
            height 100%
            background-color lightblue
            margin 0 auto
            .music-info
                height 500px
                .cd-wrapper
                    width 350px
                    height 100%
                    background-color lightcoral
                    padding-top 50px
                    .cd
                        width 350px
                        height @width
                        background url("../../assets/images/singlecover.png") no-repeat
                        background-size contain
                        text-align center
                        line-height @height
                        img
                            width 220px
                            height @width
                            border-radius 50%
                            position relative
                            top -3px
                    .operators
                        display flex
                        justify-content space-between
                        position relative
                        top 40px
                        padding 0 20px
                        .item-wrapper
                            width 44px
                            height @width
                            border-radius 50%
                            background-color $color-bottom-player-bg
                            text-align center
                            line-height @width
                            cursor pointer
                            &:hover
                                background-color $color-play-btn-hover-bg
                            .icon
                                color $color-black-light
                                position relative
                                top 1px
</style>
