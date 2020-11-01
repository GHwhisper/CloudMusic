<template>
    <div>
        <subtitle-link title="推荐歌单"></subtitle-link>
        <div class="list">
            <song-list-cover daily name="每日歌单推荐"></song-list-cover>
            <div class="list-item" v-for="item in list" :key="item.id">
                <song-list-cover :imgUrl="item.picUrl" :name="item.name" :count="item.playCount"></song-list-cover>
            </div>
        </div>
    </div>
</template>

<script>
  import SubtitleLink from 'components/subtitle-link/subtitle-link'
  import SongListCover from 'components/cover/song-list-cover'
  export default {
    name: 'recommend-song-list',
    components: {
      SubtitleLink,
      SongListCover
    },
    props: {
      list: {
        type: Array,
        default () {
          return []
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
    .list
        display grid
        grid-template-columns repeat(5, 18%)
        justify-content space-between
        .list-item
            width 100%
            margin-bottom 10px
</style>
