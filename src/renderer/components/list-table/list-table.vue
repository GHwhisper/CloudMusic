<template>
    <a-table>

    </a-table>
</template>

<script>
  const columns = [{
    title: '',
    key: '',
    dataIndex: ''
  }, {
    title: '音乐标题',
    key: '音乐标题',
    dataIndex: '音乐标题'
  }, {
    title: '歌手',
    key: '歌手',
    dataIndex: '歌手'
  }, {
    title: '专辑',
    key: '专辑',
    dataIndex: '专辑'
  }, {
    title: '时长',
    key: '时长',
    dataIndex: '时长'
  }]

  export default {
    name: 'list-table',
    data () {
      return {
        columns
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
