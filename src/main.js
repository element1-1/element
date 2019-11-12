// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import Vuex from 'vuex'
import 'es6-promise/auto'
import './assets/icon/iconfont.css'
import store from './store' 
//import './style/common.less'
import  './service/outside' 
import Vuelidate from 'vuelidate'




//import { mapMutations,mapGetters }from "vuex";

Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.baseURL = '/api'
Vue.use(Vuex)
Vue.use(Vuelidate)//安装插件

if (sessionStorage.getItem("store")) {
  console.log(11);
  store.replaceState(
    Object.assign(
      {},
      store.state,
      JSON.parse(sessionStorage.getItem("store"))
    )
  );
 //console.log(store.state.order)
 // sessionStorage.removeItem("store")
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  
})

router.beforeEach((to, from, next) => {
     let getFlag = localStorage.getItem('flag') /* 这里是判断用户是否登录过，因为在用户登录后会在localStroage内存储Flag=isLogin */
     if (getFlag === 'isLogin') { /* 如果存在Flag并且为isLogin意味着用户登录，这时修改vux内state下isLogin的状态 */
       next()
    } else {
      if (to.meta.isLogin) { /* 如果没有登录状态且要去往需要权限的路径时跳转登录页并进行提示 */
        next({
          path: '/'
        })
        alert('请先登录')
      } else {
        next()
      }
    }
  })

  router.afterEach(route => {
    window.scroll(0, 0)
  })

//console.log(store.state);
  //全局监听vuex的变化

  
    //在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(store.state));
    });