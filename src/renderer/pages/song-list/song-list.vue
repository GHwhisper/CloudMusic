<template>
    <div>歌单</div>
</template>

<script>
  import { getSongList } from 'api/songlist'

  export default {
    name: 'song-list',
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

</style>
