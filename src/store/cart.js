let initialState = {
	cart: [],
	itemCount: 0,
};

function cartReducer(state = initialState, action) {
	let { type, payload } = action;
	switch (type) {
		case 'ADD_TO_CART':
			if (payload) {
				if (state.cart.includes(payload)) {
					return { ...state, itemCount: state.itemCount + 1 };
				} else {
					return { ...state, cart: payload, itemCount: state.itemCount + 1 };
				}
			}
			return { initialState };
		case 'REMOVE_FROM_CART':
			if (payload) {
				if (state.cart.includes(payload)) {
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
