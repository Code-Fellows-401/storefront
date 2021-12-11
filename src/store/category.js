let initialState = {
	category: [
		{ displayName: 'All', normalizedName: 'all', description: 'all products' },
		{
			displayName: 'VideoGame',
			normalizedName: 'videogames',
			description: 'all videogames',
		},
		{
			displayName: 'Books',
			normalizedName: 'books',
			description: 'all books',
		},
		{ displayName: 'Wine', normalizedName: 'wine', description: 'all wines' },
	],
	onLoad: null,
};

function categoryReducer(state = initialState, action) {
	let { type, payload } = action;
	switch (type) {
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
