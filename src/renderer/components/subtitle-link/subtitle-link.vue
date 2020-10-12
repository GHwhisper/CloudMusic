<template>
    <h1>
        <router-link :to="url">{{title}}<a-icon class="arrow" type="right" /></router-link>
    </h1>
</template>

<script>
  export default {
    name: 'subtitle-link',
    props: {
      title: {
        type: String,
        required: true
      },
      url: {
        type: String,
        default: ''
      },
      arrow: {
        type: Boolean,
        default: true
      }
    }
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"

    a
        font-size $font-size-large
        font-weight $font-weight-bold
        &:link
            color $color-black-light
        &:visited
            color $color-black-light
        &:hover
            color $color-black
        &:active
            color $color-black
        .arrow
            margin-left 5px
            position relative
            top 1px
</style>
