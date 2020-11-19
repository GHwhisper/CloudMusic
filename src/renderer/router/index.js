import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import PrivateFM from '@/pages/private-fm/private-fm'
import SongList from '@/pages/song-list/song-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }, {
      path: '/private',
      name: 'PrivateFM',
      component: PrivateFM
    }, {
      path: '/songlist/:id',
      name: 'SongList',
      component: SongList
    }, {
      path: '*',
      redirect: '/'
    }
  ]
})
