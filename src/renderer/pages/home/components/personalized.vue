<template>
    <div v-if="banners.length" class="slider-wrapper">
        <slider :list="imgs"></slider>
    </div>
</template>

<script>
  import Slider from 'components/slider/slider'

  export default {
    name: 'personalized',
    props: {
      banners: {
        type: Array,
        default () {
          return []
        }
      }
    },
    components: {
      Slider
    },
    computed: {
      imgs() {
        let arr = []
        this.banners.forEach(item => {
          arr.push(item.imageUrl)
        })
        return arr
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .slider-wrapper
        width 100%
</style>
