import * as types from '../store/mutation-type'

const mutations = {
  [types.SET_IS_LOGIN](state,flag){
    state.isLogin = flag
  }
}

export default mutations
