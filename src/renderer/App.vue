<template>
    <div id="app">
        <title-bar></title-bar>
        <layout>
            <template #left>
                <navigation></navigation>
            </template>
            <template #right>
                <router-view></router-view>
            </template>
            <template #bottom>
                <bottom-player></bottom-player>
            </template>
        </layout>
    </div>
</template>

<script>
  import TitleBar from 'components/title-bar/title-bar'
  import Layout from 'components/layout/layout'
  import Navigation from 'components/navigation/navigation'
  import BottomPlayer from 'components/bottom-player/bottom-player'

  export default {
    name: 'cloud_music',
    components: {
      TitleBar,
      Layout,
      Navigation,
      BottomPlayer
    }
  }
</script>

<style>
    /* CSS */
</style>
