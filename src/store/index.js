import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from '../store/state'
import * as getters from '../store/getters'
import * as actions from '../store/action'
import mutations from '../store/mutations'

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
