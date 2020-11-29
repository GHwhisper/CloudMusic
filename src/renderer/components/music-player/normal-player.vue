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
                            <div class="item-wrapper"><like class="icon" :musicId="111"></like></div>
                            <div class="item-wrapper"><collect class="icon"></collect></div>
                            <div class="item-wrapper"><download class="icon"></download></div>
                            <div class="item-wrapper"><share class="icon"></share></div>
                        </div>
                    </div>
                    <div class="lyric-wrapper">
                        <div class="title">
                            <h1 class="name">歌曲名</h1>
                            <ul class="info">
                                <li class="item"><span>专辑：</span><router-link to="">心音</router-link></li>
                                <li class="item"><span>歌手：</span><router-link to="">上北健</router-link></li>
                                <li class="item"><span>来源：</span><router-link to="">我喜欢的音乐</router-link></li>
                            </ul>
                        </div>
                        <div class="lyric"></div>
                    </div>
                </div>
                <div class="close-normal" @click="closeNormalPlayer">
                    <i class="iconfont icon-shousuo1"></i>
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
      closeNormalPlayer () {
        this.setNormalPlayerVisibility(false)
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
    @import "~common/styles/mixins"

    .normal-player
        width 100%
        background-color $color-white
        position fixed
        top $height-title-bar
        bottom $height-bottom-player
        overflow hidden
        z-index 900
        overflow-y auto
        transform scale(1)
        transform-origin left bottom
        &.normal-enter, &.normal-leave-to
            opacity 0
            transform scale(0)
        &.normal-enter-active, &.normal-leave-active
            transition all .5s
        .content
            width 950px
            height 100%
            background-color lightblue
            margin 0 auto
            position relative
            .music-info
                height 500px
                display flex
                .cd-wrapper
                    width 350px
                    height 100%
                    padding-top 50px
                    flex none
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
                .lyric-wrapper
                    flex 1
                    background-color yellowgreen
                    padding 30px 30px 0 130px
                    display flex
                    flex-direction column
                    .title
                        flex none
                        .name
                            font-size $font-size-song-name
                            color $color-black-light
                            line-height 1
                            margin 0
                            single-line()
                        .info
                            list-style-type none
                            margin 0
                            padding 0
                            display flex
                            margin-top 18px
                            .item
                                flex 1 0 0
                                overflow hidden
                                single-line()
                                font-size $font-size-small-s
                                &:not(:last-child)
                                    padding-right 10px
                    .lyric
                        flex 1
                        width 100%
                        background-color lightcoral
            .close-normal
                position absolute
                top 20px
                left 100%
                cursor pointer
                border 1px solid $color-border
                padding 0 10px
                border-radius 5px
                i
                    font-size 20px
                    line-height inherit
</style>
