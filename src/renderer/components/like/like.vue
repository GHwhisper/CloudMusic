<template>
    <i class="iconfont icon-xihuan-kongpt" :style="{fontSize: size}"></i>
</template>

<script>
  export default {
    name: 'like',
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
