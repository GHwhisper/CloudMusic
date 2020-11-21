<template>
    <div class="head">
        <div class="cover">
            <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2801499355,2429956962&fm=26&gp=0.jpg" alt="">
        </div>
        <div class="detail">
            <h1>
                <i class="iconfont icon-gedan"></i>
                <span class="name">歌单名</span>
            </h1>
            <div class="author">
                <avatar></avatar>
                <router-link to="" class="author-name">作者</router-link>
                <span class="create-date">2020-10-21创建</span>
            </div>
            <div class="operators">

            </div>
            <div class="info">

            </div>
        </div>
    </div>
</template>

<script>
  import { getSongList } from 'api/songlist'
  import Avatar from 'components/avatar/avatar'

  export default {
    name: 'song-list',
    components: {
      Avatar
    },
    created () {
      getSongList(this.$route.params.id).then(res => {
        console.log(res)
      })
    },
    methods: {

    }
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"
    @import "~common/styles/mixins"

    .head
        padding 32px
        background-color: lightblue
        display flex
        .cover
            flex none
            width 202px
            height @width
            border-radius $border-radius-cover
            overflow hidden
            img
                width 100%
                height 100%
        .detail
            flex 1
            background-color: lightcoral
            padding-left 24px
            overflow hidden
            h1
                margin 0
                padding 0
                line-height 1
                display flex
                i
                    line-height inherit
                    font-size 36px
                .name
                    font-size $font-size-song-list-name
                    line-height 36px
                    font-weight $font-weight-bold
                    margin-left 10px
                    single-line()
            .author
                display flex
                align-items center
                .author-name, .create-date
                    font-size $font-size-small-s
                & > *:not(:first-child)
                    margin-left 10px
</style>
