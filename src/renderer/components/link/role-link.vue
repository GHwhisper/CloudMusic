<template>
    <router-link to="">{{name}}</router-link>
</template>

<script>
  export default {
    name: 'role-link',
    props: {
      id: {
        type: Number,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      role: { // 普通用户为默认值''，跳转普通用户页面，歌手传入'singer'跳转歌手页面
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
