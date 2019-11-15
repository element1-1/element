import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login'
import place from '@/page/place'
import storedetail from '@/page/storeDetail'
import center from '@/page/center'
import payorder from '@/page/payorder'
import order from '@/components/center/order'
import orderdetail from '@/components/center/orderDetail'
import rate from '@/page/rate'
//import place from '@/page/place'
import collect from '@/components/center/collect'

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
      name:'place',
      component: place,
      meta:{
        isLogin: true
      }
    },
    {
      path: '/storedetail',
      name: 'storedetail',
      component: storedetail
    },
    {
      path: '/center',
      name: 'center',
      component: center,
      children:[
        {
          path: '/order',
          name: 'order',
          component: order
        },
        {
          path: '/orderdetail/:id',
          name: 'orderdetail',
          component: orderdetail
        },
        {
          path: '/collect',
          name: 'collect',
          component: collect
        },
        { path: '*', redirect: '/center/order' }
      ]
    },
    {
      path: '/payorder',
      name: 'payorder',
      component: payorder
    },
    {
      path: '/rate',
      name: 'rate',
      component: rate
    }
  ]
})
