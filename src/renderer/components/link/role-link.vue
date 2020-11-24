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
      role: { // 普通用户跳转普通用户页面，歌手singer跳转歌手页面
        type: String,
        default: ''
      }
    }
  }
</script>

<style lang="stylus" scoped>

</style>
