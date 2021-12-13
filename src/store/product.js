import axios from 'axios';

let initialState = {
	products: [],
};

export const fetchProducts = () => async (dispatch) => {
	const response = await axios.get('http://localhost:3001/products');

	dispatch({
		type: 'FETCH_PRODUCTS',
		payload: response.data.results,
	});
};

export const addProduct = (product) => async (dispatch) => {
	const response = await axios.post('http://localhost:3001/products', {
		product,
	});
	const data = response.data;
	dispatch({
		type: 'ADD_PRODUCT',
		payload: data,
	});
};

function productReducer(state = initialState, action) {
	let { type, payload } = action;

	switch (type) {
		// Fetches then Products from the DB on the useEffect() on pageload or state change. //
		case 'FETCH_PRODUCTS':
			return { ...state, products: payload };
		case 'ADD_PRODUCT':
			break;
		// Filters the product based on the CAtegory Selected in the Menu //
		case 'CATEGORY_CHOICE':
			console.log('this is the state log', state);
			console.log('this is the payload', payload);
			if (payload !== 'All') {
				const filter = state.products.filter((product) => {
					if (product.category === payload) {
						return product;
					}
				});
				return { ...state.products, products: filter };
			}
			return state;
		case 'ADD_TO_CART':
			let incriment = state.products.map((product) => {
				if (product.productName === payload.productName) {
					if (product.quantity > 0) {
						++product.cartQuantity;
						product.quantity--;
					} else {
						alert('Item out of stock');
					}
				}
				return product;
			});
			return { ...state, products: incriment };

		// ------------------------------------------ Doesnt Work
		case 'REMOVE_FROM_CART':
			if (state.products.includes(payload)) {
				state.products.filter((product) => {
					if (product === payload) {
						return product.cartQuantity - 1;
					}
				});
			}
			break;
		default:
			return state;
	}
}
export default productReducer;
