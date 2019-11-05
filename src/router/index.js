import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login'
import place from '@/page/place'
import shop from '@/page/storeDetail'
import order from '@/page/order'
import profile from '@/page/profile'
import cooperation from '@/page/cooperation'
import help from '@/page/help'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/place',
      name: 'place',
      component: place,
      meta:{
        isLogin: true
      }
    },
    {
      path:'/shop',
      name: 'shop',
      component: shop
    },
    {
      path: '/order',
      name: 'order',
      component: order
    },
    {
      path: '/profile',
      name: 'profile',
      component : profile
    },
    {
      path: '/cooperation',
      name: 'cooperation',
      component: cooperation
    },
    {
      path: '/help',
      name: 'help',
      component: help
    }
  ]
})
