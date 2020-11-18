<template>
    <i class="iconfont icon-tianjiawenjianjia" :style="{fontSize: size}" title="收藏"></i>
</template>

<script>
  export default {
    name: 'collect',
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
