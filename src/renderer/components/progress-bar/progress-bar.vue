<template>
    <div class="process-bar">

    </div>
</template>

<script>
  export default {
    name: 'progress-bar',
    props: {
      percent: {
        type: Number,
        default: 0
      }
    }
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"

    .process-bar
        width 400px
        height 3px
        background-color yellowgreen
</style>
