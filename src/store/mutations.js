const mutations = {
	SET_ORDER(state, val1) {
		state.order.cart= val1;
	},
	SET_MONEY(state,val2) {
		state.order.totalmoney= val2;
	}
}


export default mutations
