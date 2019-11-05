import * as types from './mutation-type'

const setIsLogin = function ({commit}, flag) {
commit(types.SET_IS_LOGIN, flag)
}

export {
     setIsLogin
}
