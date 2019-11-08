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



//import  mutations from './store/mutations'

Vue.config.productionTip = false
Vue.prototype.$http = axios
axios.defaults.baseURL = '/api'
Vue.use(Vuex)
Vue.use(Vuelidate)//安装插件


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
});


