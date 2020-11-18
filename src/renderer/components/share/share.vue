<template>
    <i class="iconfont icon-fenxiang" :style="{fontSize: size}" title="分享"></i>
</template>

<script>
  export default {
    name: 'share',
    props: {
      size: {
        type: String,
        default: '20px'
      }
    }
  }
</script>

<style lang="stylus" scoped>
    i
        cursor pointer
</style>
