<template>
    <a-table :columns="columns" :data-source="list" :rowKey="song => song.id" :pagination="false">
        <span slot="singers" slot-scope="singers">
            <role-link v-for="singer in singers"
                       :key="singer.id"
                       role="singer"
                       :id="singer.id"
                       :name="singer.name"
                       class="link"
            ></role-link>
        </span>
        <span slot="album" slot-scope="album">
            <router-link to="">{{album.name}}</router-link>
        </span>
        <span slot="duration" slot-scope="duration">{{musicTimeFormat(duration)}}</span>
    </a-table>
</template>

<script>
  import RoleLink from 'components/link/role-link'
  import { musicTimeFormat } from 'common/js/util'

  const columns = [{
    title: '',
    customRender: (text, record, index) => `${index + 1}`
  }, {
    title: '音乐标题',
    dataIndex: 'name',
    key: 'name'
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
      RoleLink
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
      musicTimeFormat
    }
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"

    .link:not(:last-child)::after
        content "/"
        padding 0 3px
        color $color-black-light
</style>
