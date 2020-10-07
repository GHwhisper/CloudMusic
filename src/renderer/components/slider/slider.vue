<template>
    <div class="slider">
        <div class="slider-group">
            <div ref="sliderItem" class="slider-item mask" :class="setClass(index)" v-for="(item, index) in list" :key="index">
                <img ref="img" :src="item" alt="">
            </div>
        </div>
        <a-icon class="arrow arrow-left" type="left" @click="prev" />
        <a-icon class="arrow arrow-right" type="right" @click="next" />
        <div class="dots">
            <span class="dot" v-for="(item, index) in dots" :key="item"
                  :class="{active: currentIndex === index}"></span>
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
      }
    },
    data () {
      return {
        dots: [],
        currentIndex: 0
      }
    },
    mounted () {

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
        this.currentIndex = this.currentIndex === 0 ? this.list.length - 1 : this.currentIndex - 1
      },
      next () {
        this.currentIndex = ++this.currentIndex % this.list.length
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
                &.mask
                    &.prev, &.next
                        filter brightness(50%)
        .arrow
            position absolute
            font-size $font-size-large
            z-index 30
            top 50%
            color $color-gray-drak
            cursor pointer
            visibility hidden
            &.arrow-left
                left 10px
                transform translateY(-50%)
            &.arrow-right
                right 10px
                transform translateY(-50%)
        &:hover
            .arrow
                visibility visible
</style>
