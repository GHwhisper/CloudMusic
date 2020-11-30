<template>
    <div class="player">
        <div class="left">
            <div class="img-con">
                <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2801499355,2429956962&fm=26&gp=0.jpg" alt="">
                <div class="spread" @click="togglePlayer">
                    <i class="iconfont" :class="screenIcon"></i>
                </div>
            </div>
            <div class="info">
                <div class="name">
                    <span>{{currentSong.name}}</span>
                    <like class="like" :musicId="111"></like>
                </div>
                <div class="singer">
                    <link-group class="link-group" :list="currentSong.singers"></link-group>
                </div>
            </div>
        </div>
        <div class="center">
            <div class="content">
                <div class="operators">
                    <div class="mode" @click="changeMode">
                        <i class="iconfont" :class="modeIcon"></i>
                        <tip class="tip" :text="modeText" name="playMode"></tip>
                    </div>
                    <div><i class="iconfont icon-shangyiqu"></i></div>
                    <div @click="togglePlaying" class="circle"><i class="iconfont" :class="playIcon"></i></div>
                    <div><i class="iconfont icon-xiayiqu"></i></div>
                    <div><i class="iconfont icon-geci"></i></div>
                </div>
                <div class="progress">
                    <span class="time time-l">02: 19</span>
                    <progress-bar class="progress-bar"></progress-bar>
                    <span class="time time-r">05: 00</span>
                </div>
            </div>
        </div>
        <div class="right">
            <div class="quality">标准</div>
            <div><i class="iconfont icon-jingyunyinxiaopt"></i></div>
            <loudspeaker></loudspeaker>
            <div><i class="iconfont icon-caidan"></i></div>
        </div>
        <normal-player></normal-player>
        <audio :src="currentSongUrl"></audio>
    </div>
</template>

<script>
  import Like from 'components/like/like'
  import ProgressBar from 'components/progress-bar/progress-bar'
  import { mapGetters, mapMutations } from 'vuex'
  import { playMode } from 'common/js/config'
  import Loudspeaker from 'components/loudspeaker/loudspeaker'
  import Tip from 'components/tip/tip'
  import NormalPlayer from 'components/music-player/normal-player'
  import { getSongUrl, getLyric, getSongDetail } from 'api/song'
  import LinkGroup from 'components/link/link-group'

  export default {
    name: 'bottom-player',
    components: {
      Like,
      ProgressBar,
      Loudspeaker,
      Tip,
      NormalPlayer,
      LinkGroup
    },
    props: {

    },
    data () {
      return {
        showTip: false
      }
    },
    methods: {
      changeMode () {
        const mode = (this.mode + 1) % 4
        this.setPlayMode(mode)
      },
      togglePlaying () {
        this.setPlayingState(!this.playing)
      },
      togglePlayer () {
        this.setNormalPlayerVisibility(!this.normalPlayerVisibility)
      },
      getSongUrl,
      getLyric,
      getSongDetail,
      ...mapMutations({
        setPlayMode: 'SET_PLAY_MODE',
        setPlayingState: 'SET_PLAYING_STATE',
        setNormalPlayerVisibility: 'SET_NORMAL_PLAYER_VISIBILITY',
        setCurrentSongUrl: 'SET_CURRENT_SONG_URL'
      })
    },
    computed: {
      modeIcon () {
        switch (this.mode) {
          case playMode.sequence.code:
            return 'icon-shunxubofang'
          case playMode.loop.code:
            return 'icon-xunhuanbofang'
          case playMode.repeat.code:
            return 'icon-danquxunhuan'
          case playMode.random.code:
            return 'icon-suijibofang'
        }
      },
      modeText () {
        switch (this.mode) {
          case playMode.sequence.code:
            return playMode.sequence.name
          case playMode.loop.code:
            return playMode.loop.name
          case playMode.repeat.code:
            return playMode.repeat.name
          case playMode.random.code:
            return playMode.random.name
        }
      },
      playIcon () {
        return this.playing ? 'icon-zanting' : 'icon-bofang'
      },
      screenIcon () {
        return this.normalPlayerVisibility ? 'icon-shousuo' : 'icon-kuozhan'
      },
      ...mapGetters([
        'mode',
        'playing',
        'normalPlayerVisibility',
        'currentSong',
        'currentSongUrl'
      ])
    },
    watch: {
      mode () {
        this.bus.$emit('showTip', 'playMode')
      },
      currentSong (val) {
        console.log(val)
        // this.getSongUrl(val.id).then(res => {
        //   const songUrl = res.data.data[0].url
        //   console.log(songUrl)
        //   this.setCurrentSongUrl(songUrl)
        // })
        // this.getSongDetail(val.id).then(res => {
        //   console.log(res.data)
        // })
      }
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
        z-index 100
        .left
            width 280px
            flex-shrink 0
            display flex
            box-sizing border-box
            padding 12px
            .img-con
                width 54px
                height @width
                background-color $color-background
                border-radius $border-radius-cover
                overflow hidden
                margin-right 10px
                flex-shrink 0
                position relative
                img
                    width 100%
                    height 100%
                .spread
                    width 100%
                    height 100%
                    position absolute
                    top 0
                    left 0
                    cursor pointer
                    text-align center
                    background-color $color-black-trans
                    opacity 0
                    z-index 10
                    i
                        font-size 34px
                        color $color-white
                        line-height 54px
                &:hover
                    img
                        filter blur(2px)
                    .spread
                        opacity 1
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
                    .like:hover
                        color $color-black-light
                .singer
                    font-size $font-size-small
                    single-line()
                    .link-group >>> a
                        color $color-font-default
        .center
            flex 1
            padding 12px 0
            .content
                width 500px
                height 100%
                margin 0 auto
                display flex
                flex-direction column
                .operators
                    flex-shrink 0
                    display flex
                    justify-content center
                    div
                        line-height 40px
                        i
                            color $color-black-light
                            font-size $font-size-small
                            cursor pointer
                        &:not(.circle) i:hover
                            color $color-next-btn-hover
                        &:not(:last-child)
                            margin-right 36px
                    div.circle
                        width 40px
                        height @width
                        line-height @height
                        text-align center
                        border-radius 50%
                        background-color $color-play-btn-bg
                        cursor pointer
                        i
                            font-size $font-size-large
                        &:hover
                            background-color $color-play-btn-hover-bg
                    div.mode
                        position relative
                        i
                            font-size $font-size-medium
                            font-weight bold
                        .tip
                            width 120px
                            text-align center
                            position absolute
                            top -30px
                            left 50%
                            transform translateX(-50%)
                .progress
                    flex 1
                    display flex
                    justify-content space-between
                    align-items flex-end
                    .time
                        font-size 12px
                        line-height 1
                        flex-shrink 0
                        color $color-play-time
                    .progress-bar
                        margin 0 2px
        .right
            width 280px
            flex-shrink 0
            display flex
            align-items center
            justify-content space-around
            box-sizing border-box
            padding-right 10px
            div
                i
                    font-size 24px
                    cursor pointer
                    color $color-black-light
                &:last-child i:hover
                    color $color-black
            .quality
                border 1px solid $color-black-light
                line-height 1
                padding 2px
                border-radius 2px
                cursor pointer
</style>
