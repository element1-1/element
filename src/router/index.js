import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login'
import storedetail from '@/page/storeDetail'
import center from '@/page/center'
import payorder from '@/page/payorder'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/storedetail',
      name: 'storedetail',
      component: storedetail
    },
    {
      path: '/center',
      name: 'center',
      component: center
    },
    {
      path: '/payorder',
      name: 'payorder',
      component: payorder
    }
  ]
})
