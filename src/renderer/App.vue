<template>
  <div id="app">
    <title-bar></title-bar>
    <router-view></router-view>
  </div>
</template>

<script>
  import TitleBar from 'components/title-bar/title-bar'
  export default {
    name: 'cloud_music',
    components: {
      TitleBar
    }
  }
</script>

<style>
  /* CSS */
</style>
