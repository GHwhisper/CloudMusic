<template>
    <a-table class="a-table"
             :columns="columns"
             :data-source="list"
             :rowKey="song => song.id"
             :pagination="false"
             :customRow="rowEvent"
    >
        <span slot="id" slot-scope="text, record, index" class="options">
            <span class="order">{{index + 1 >= 10 ? index + 1 : `0${index + 1}`}}</span>
            <like :musicId="text" size="18px"></like>
            <i class="iconfont icon-xiazai download"></i>
        </span>
        <span slot="name" slot-scope="name" class="name">{{name}}</span>
        <span slot="singers" slot-scope="singers">
            <link-group class="link-group" :list="singers"></link-group>
        </span>
        <span slot="album" slot-scope="album">
            <router-link to="" class="album">{{album.name}}</router-link>
        </span>
        <span slot="duration" slot-scope="duration" class="duration">{{musicTimeFormat(duration)}}</span>
    </a-table>
</template>

<script>
  import LinkGroup from 'components/link/link-group'
  import { musicTimeFormat } from 'common/js/util'
  import Like from 'components/like/like'
  import { mapMutations } from 'vuex'
  // import VueDraggableResizable from 'vue-draggable-resizable'

  const columns = [{
    title: '',
    dataIndex: 'id',
    key: 'id',
    scopedSlots: { customRender: 'id' }
  }, {
    title: '音乐标题',
    dataIndex: 'name',
    key: 'name',
    scopedSlots: { customRender: 'name' }
  }, {
    title: '歌手',
    dataIndex: 'singers',
    key: 'singers',
    scopedSlots: { customRender: 'singers' }
  }, {
    title: '专辑',
    dataIndex: 'album',
    key: 'album',
    scopedSlots: { customRender: 'album' }
  }, {
    title: '时长',
    dataIndex: 'duration',
    key: 'duration',
    scopedSlots: { customRender: 'duration' }
  }]

  export default {
    name: 'list-table',
    components: {
      LinkGroup,
      Like
    },
    props: {
      list: {
        type: Array
      }
    },
    data () {
      return {
        columns
      }
    },
    methods: {
      rowEvent (record, index) {
        return {
          on: {
            dblclick: () => {
              this.playMusic(record)
            }
          }
        }
      },
      playMusic (song) {
        this.setCurrentSong(song)
      },
      musicTimeFormat,
      ...mapMutations({
        setCurrentSong: 'SET_CURRENT_SONG'
      })
    }
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"

    .a-table >>> th
        padding-top 10px
        padding-bottom 10px
        & span.ant-table-column-title
            color $color-gray
    .a-table >>> td
        padding-top 6px
        padding-bottom 6px
        border none

    .options
        display flex
        align-items center
        & > *:not(:last-child)
            margin-right 10px
        .order
        .download
            cursor pointer
    .name
        color $color-black-light
        cursor default
        font-size $font-size-small
    .link-group >>> a
    .album
        color $color-gray
        &:hover
            color $color-black-light
    .duration
        color $color-gray-dark
</style>
