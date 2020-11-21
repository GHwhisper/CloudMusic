<template>
    <span :style="avatarStyleObj">
        <img v-if="src" :src="src" :alt="alt">
        <i v-else class="iconfont icon-yonghu"></i>
    </span>
</template>

<script>
  export default {
    name: 'avatar',
    props: {
      src: {
        type: String,
        default: ''
      },
      alt: {
        type: String,
        default: ''
      },
      size: {
        type: [Number, String],
        default: '30px'
      },
      radius: {
        type: [Number, String],
        default: '50%'
      }
    },
    data () {
      return {
        avatarStyleObj: {
          width: typeof this.size === 'number' ? `${this.size}px` : this.size,
          height: typeof this.size === 'number' ? `${this.size}px` : this.size,
          borderRadius: typeof this.radius === 'number' ? `${this.radius}px` : this.radius
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"

    span
        display inline-block
        background-color $color-white
        overflow hidden
        position relative
        border 1px solid $color-border
        cursor pointer
        i
            position absolute
            top 50%
            left 50%
            transform translate(-50%, -50%)
</style>
