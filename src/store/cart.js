import axios from 'axios';

let initialState = {
	cart: [],
	itemCount: 0,
};

export const fetchCart = () => async (dispatch) => {
	const response = await axios.get('http://localhost:3001/cart');

	dispatch({
		type: 'FETCH_CART',
		payload: response.data.results,
	});
};

export const addCart = (product) => async (dispatch) => {
	const response = await axios.post('http://localhost:3001/cart', {
		product,
	});
	const data = response.data;
	dispatch({
		type: 'ADD_CART',
		payload: data,
	});
};

function cartReducer(state = initialState, action) {
	let { type, payload } = action;
	switch (type) {
		case 'FETCH_CART':
			console.log('in fetch cart');
			return { cart: payload };
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
			return state;
	}
}

export default cartReducer;
