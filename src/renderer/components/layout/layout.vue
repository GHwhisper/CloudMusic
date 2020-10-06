<template>
    <div class="container">
        <div class="left">
            <slot name="left"></slot>
        </div>
        <div class="right">
            <slot name="right"></slot>
        </div>
        <div class="bottom">
            <slot name="bottom"></slot>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'layout'
  }
</script>

<style lang="stylus" scoped>
    .container
        display flex
        position absolute
        top 50px
        left 0
        right 0
        bottom 55px
        .right
            flex 1
</style>
