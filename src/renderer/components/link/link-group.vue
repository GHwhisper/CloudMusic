<template>
    <span v-if="list" class="link-group">
        <role-link class="link-item"
                   v-for="item in list"
                   :key="item.id"
                   :id="item.id"
                   :name="item.name"
                   role="singer"
        ></role-link>
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
      }
    }
  }
</script>

<style lang="stylus" scoped>
    @import "~common/styles/variable"

    .link-group
        .link-item:not(:last-child)::after
            content "/"
            padding 0 3px
            color $color-black-light
</style>
