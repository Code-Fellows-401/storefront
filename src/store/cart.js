let initialState = {
	cart: [],
	itemCount: 0,
};

function cartReducer(state = initialState, action) {
	let { type, payload } = action;
	switch (type) {
		case 'ADD_TO_CART':
			if (payload.quantity === 0) {
				return state;
			} else {
				return {
					cart: [...state.cart, payload.productName],
					itemCount: state.itemCount + 1,
				};
			}

		// ---------------------------------------------- Remove Still WIP;
		case 'REMOVE_FROM_CART':
			if (payload) {
				if (state.cart.includes(payload.productName)) {
					let index = state.cart.indexOf(payload);
					state.cart.slice(index, 1);
					return { ...state, itemCount: state.itemCount - 1 };
				}
			}
			return initialState;
		default:
			return initialState;
	}
}

export default cartReducer;
