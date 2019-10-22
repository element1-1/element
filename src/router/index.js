import Vue from 'vue'
import Router from 'vue-router'
import login from '@/page/login'
import place from '@/page/place'

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
      component: place
    }
  ]
})
