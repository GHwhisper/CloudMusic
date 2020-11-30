<template>
    <span>
        <template v-if="type === 'singers' && list">
            <role-link class="link-item"
                       v-for="item in list"
                       :key="item.id"
                       :id="item.id"
                       :name="item.name"
                       role="singer"
            ></role-link>
        </template>
        <template v-if="type === 'tags' && list">
            <router-link class="link-item"
                         v-for="item in list"
                         :key="item"
                         to=""
            >{{item}}</router-link>
        </template>
    </span>
</template>

<script>
  import RoleLink from 'components/link/role-link'

  export default {
    name: 'link-group',
    components: {
      RoleLink
    },
    props: {
      list: {
        type: Array,
        required: true
      },
      type: { // 默认'singers'：用作歌手数组链接，'tags'：用作歌单标签连接
        type: String,
        default: 'singers'
      }
    }
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"

    .link-item:not(:last-child)::after
        content "/"
        padding 0 3px
        color $color-font-default
</style>
