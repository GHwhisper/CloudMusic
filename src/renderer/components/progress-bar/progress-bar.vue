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
        width 100%
        height 3px
        background $color-gray-light
        border-radius 1.5px
        &:hover
            height 6px
            border-radius 3px
</style>
