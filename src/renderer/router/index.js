import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import(/* webpackChunkName: 'home' */ '@/pages/home/home')
const PrivateFM = () => import(/* webpackChunkName: 'private-fm' */ '@/pages/private-fm/private-fm')
const SongList = () => import(/* webpackChunkName: 'song-list' */ '@/pages/song-list/song-list')

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
