import * as types from '../store/mutation-type'
const mutations = {
  SET_ORDER(state, val1) {
    state.order.cart = JSON.stringify(val1);
  },
  SET_MONEY(state, val2) {
    state.order.totalmoney = JSON.stringify(val2);
  },
  [types.SET_IS_LOGIN](state, flag) {
    state.isLogin = flag;
  }

}


export default mutations
