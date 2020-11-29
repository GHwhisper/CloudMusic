<template>
    <i class="iconfont icon-xihuan-kongpt" :style="{fontSize: size}" title="喜欢" @click="submitLike"></i>
</template>

<script>
  export default {
    name: 'like',
    props: {
      size: {
        type: String,
        default: '20px'
      },
      musicId: {
        type: Number,
        required: true
      }
    },
    methods: {
      submitLike () {
        console.log(this.musicId)
      }
    }
  }
</script>

<style lang="stylus" scoped>
    i
        cursor pointer
</style>
