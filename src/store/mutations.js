const mutations = {
	SET_ORDER(state, val1) {
		state.order.cart= JSON.stringify(val1);
	},
	SET_MONEY(state,val2) {
		state.order.totalmoney= JSON.stringify(val2);
	}
}


export default mutations
