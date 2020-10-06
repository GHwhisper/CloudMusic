import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import PrivateFM from '@/pages/private-fm/private-fm'

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
      path: '*',
      redirect: '/'
    }
  ]
})
