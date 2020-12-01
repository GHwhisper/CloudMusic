<template>
    <div>
        <div v-if="!daily" class="container" :style="width">
            <div class="cover" :style="coverStyleObj">
                <img v-lazy="imgUrl" alt="">
                <play class="play-btn fade"></play>
            </div>
            <span class="name">{{name}}</span>
            <play-volume class="play-volume" :count="count"></play-volume>
        </div>
        <!--每日推荐封面-->
        <div v-else class="container" :style="width">
            <div class="cover" :style="coverStyleObj">
                <img class="img-blur" src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3597917798,1875298108&fm=26&gp=0.jpg" alt="">
                <play class="play-btn fade"></play>
                <div class="tip">{{tip}}</div>
                <div class="iconfont icon-artboard calender">
                    <span class="date">{{date}}</span>
                </div>
            </div>
            <span class="name">{{name}}</span>
        </div>
    </div>
</template>

<script>
  import Play from 'components/play/play'
  import PlayVolume from 'components/play-volume/play-volume'

  export default {
    name: 'song-list-cover',
    components: {
      Play,
      PlayVolume
    },
    props: {
      width: {
        type: [Number, String],
        default: '100%'
      },
      height: {
        type: [Number, String],
        default: '100%'
      },
      radius: {
        type: [Number, String],
        default: '5px'
      },
      imgUrl: String,
      name: String,
      count: {
        type: Number,
        default: 0
      },
      daily: {
        type: Boolean,
        default: false
      },
      tip: {
        type: String,
        default: '根据您的音乐口味生成每日更新'
      }
    },
    data () {
      return {
        coverStyleObj: {
          width: typeof this.width === 'number' ? `${this.width}px` : this.width,
          height: typeof this.height === 'number' ? `${this.height}px` : this.height,
          borderRadius: typeof this.radius === 'number' ? `${this.radius}px` : this.radius
        }
      }
    },
    computed: {
      date() {
        return new Date().getDate()
      }
    }
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"
    @import "~common/styles/mixins"

    .container
        font-size 0
        position relative
        .cover
            display inline-block
            overflow hidden
            position relative
            cursor pointer
            img
                width 100%
                height 100%
            .play-btn
                position absolute
                right 10px
                bottom 10px
                opacity 0
                transition opacity .5s linear
                z-index 10
            &:hover
                .play-btn
                    opacity 1
            .img-blur
                filter blur(20px) brightness(70%)
            .tip
                width 100%
                position absolute
                top -70px
                left 0
                font-size $font-size-small-s
                background $color-black-trans
                color $color-white
                padding 10px
                transition top .3s linear .5s
                z-index 20
            &:hover
                .tip
                    top 0
            .calender
                position absolute
                font-size 70px
                left 50%
                top 50%
                transform translate(-50%, -50%)
                color $color-white
                font-weight 100
                .date
                    position absolute
                    top 50%
                    left 50%
                    font-size 30px
                    transform translate(-50%, -35%)
        .name
            font-size $font-size-medium-l
            line-height 1.3
            line-clamp()
            height 44px
            margin 10px 0
            box-sizing content-box
            cursor pointer
            &:hover
                color $color-black
        .play-volume
            position absolute
            top 5px
            right 10px
            z-index 10
</style>
