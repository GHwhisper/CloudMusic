<template>
    <div class="container" :style="width">
        <div class="cover" :style="coverStyleObj">
            <img :src="imgUrl" alt="">
                <play class="play-btn fade"></play>
        </div>
        <span class="name">{{name}}</span>
    </div>
</template>

<script>
  import Play from 'components/play/play'

  export default {
    name: 'song-list-cover',
    components: {
      Play
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
      name: String
    },
    data () {
      return {
        coverStyleObj: {
          width: typeof this.width === 'number' ? `${this.width}px` : this.width,
          height: typeof this.height === 'number' ? `${this.height}px` : this.height,
          borderRadius: typeof this.radius === 'number' ? `${this.radius}px` : this.radius
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"
    @import "~common/styles/mixins"

    .container
        font-size 0
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
                transition opacity linear .5s
            &:hover
                .play-btn
                    opacity 1
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
</style>
