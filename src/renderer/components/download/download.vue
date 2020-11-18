<template>
    <i class="iconfont icon-xiazaipt" :style="{fontSize: size}" title="下载"></i>
</template>

<script>
  export default {
    name: 'download',
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
