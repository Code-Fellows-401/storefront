import axios from 'axios';

let initialState = {
	category: [],
	onLoad: null,
};

export const fetchCategories = () => async (dispatch) => {
	const response = await axios.get('http://localhost:3001/categories');

	dispatch({
		type: 'FETCH_CATEGORIES',
		payload: response.data.results,
	});
};

function categoryReducer(state = initialState, action) {
	let { type, payload } = action;
	switch (type) {
		case 'FETCH_CATEGORIES':
			return { category: payload };
		case 'CATEGORY_CHOICE':
			let selectedCat = state.category.filter(
				(category) => category.displayName === payload
			)[0];
			return { ...state, onLoad: selectedCat.displayName };
		default:
			return state;
	}
}

export default categoryReducer;
