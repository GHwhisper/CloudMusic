<template>
    <div class="slider" :class="dots ? 'padding-dots' : ''" ref="slider">
        <div class="slider-group" @mouseover="pause" @mouseleave="play">
            <div ref="sliderItem" class="slider-item" :class="setClass(index)"
                 v-for="(item, index) in list" :key="index"
                 @click="handleSliderItemClick(index)"
            >
                <div :class="mask ? 'mask' : ''">
                    <img ref="img" :src="item" alt="">
                </div>
            </div>
        </div>
        <i v-if="arrow" class="iconfont icon-arrow-left arrow arrow-left" @click="prev"></i>
        <i v-if="arrow" class="iconfont icon-arrow-right arrow arrow-right" @click="next"></i>
        <div v-if="dots" class="dots">
            <span class="dot" v-for="(item, index) in list" :key="index"
                  :class="{active: currentIndex === index}"
                  @mouseover="handleMouseOver(index)"
                  @mouseleave="play"
            ></span>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'slider',
    props: {
      list: {
        type: Array,
        required: true,
        default () {
          return []
        }
      },
      autoplay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 3000
      },
      mask: {
        type: Boolean,
        default: true
      },
      dots: {
        type: Boolean,
        default: true
      },
      arrow: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        currentIndex: 0,
        timer: null,
        sliderDomList: []
      }
    },
    mounted () {
      this.sliderDomList = this.$refs.slider.querySelectorAll('.slider-item') // 缓存所有slider-item的Dom
      this.play()
    },
    methods: {
      setClass (index) {
        let next = this.currentIndex === (this.list.length - 1) ? 0 : (this.currentIndex + 1)
        let prev = this.currentIndex === 0 ? (this.list.length - 1) : (this.currentIndex - 1)
        switch (index) {
          case this.currentIndex:
            return 'active'
          case next:
            return 'next'
          case prev:
            return 'prev'
          default:
            return ''
        }
      },
      prev () {
        this.play()
        this.currentIndex = this.currentIndex === 0 ? this.list.length - 1 : this.currentIndex - 1
      },
      next () {
        this.play()
        this.currentIndex = ++this.currentIndex % this.list.length
      },
      play () {
        this.pause()
        if (this.autoplay) {
          this.timer = setInterval(() => {
            this.next()
          }, this.interval)
        }
      },
      pause () {
        clearInterval(this.timer)
      },
      handleMouseOver(index) {
        this.currentIndex = index
        this.pause()
      },
      handleSliderItemClick (index) {
        if (index === this.currentIndex) { // 点击当前slider-item，触发事件，执行什么任务由外层决定
          this.$emit('sliderItemClick', index)
        } else {
          let clickedClassName = this.sliderDomList[index].className.split(' ')[1]
          if (clickedClassName) {
            clickedClassName === 'next' ? this.next() : this.prev()
          }
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"

    .slider
        width 100%
        height 222.2px
        position relative
        box-sizing content-box
        .slider-group
            width 100%
            height 100%
            position relative
            .slider-item
                width 600px
                height 100%
                position absolute
                top 0
                left 50%
                transition all ease-in-out 200ms
                transform scale(0.95) translate3d(-50%, 0, 0)
                visibility hidden
                cursor pointer
                border-radius 10px
                overflow hidden
                z-index 1
                img
                    width 100%
                &.active
                    z-index 20
                    left 50%
                    transform scale(1) translate3d(-50%, 0, 0)
                    visibility visible
                &.prev
                    z-index 19
                    transform scale(0.95)
                    left -(600 * 0.05 / 2)px
                    top (222.2 * 0.05 / 2)px
                    visibility visible
                &.next
                    z-index 19
                    left calc(100% - 15px)
                    top ((222.2 * 0.05) / 2)px
                    transform scale(0.95) translate3d(-100%, 0, 0)
                    visibility visible
                &.prev, &.next
                    & .mask
                        filter brightness(50%)
        .arrow
            position absolute
            font-size 40px
            z-index 30
            top 50%
            color $color-gray-dark
            cursor pointer
            visibility hidden
            &.arrow-left
                left 0
                transform translateY(-50%)
            &.arrow-right
                right 0
                transform translateY(-50%)
        &:hover
            .arrow
                visibility visible
        &.padding-dots
            padding-bottom 15px
        .dots
            height 3px
            font-size 0
            position absolute
            bottom 0
            left 50%
            transform translate3d(-50%, 0, 0)
            .dot
                width 15px
                height 3px
                display inline-block
                background-color $color-gray-light
                cursor pointer
                &:not(:last-child)
                    margin-right 5px
                &.active
                    background-color $color-background
</style>
