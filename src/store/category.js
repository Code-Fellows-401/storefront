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
	onLoad: 'All',
};

function categoryReducer(state = initialState, action) {
	let { type, payload } = action;
	switch (type) {
		case 'CATEGORY_CHOICE':
			let selectedCat = initialState.category.filter((category) => {
				if (category.displayName === payload) {
					return { onLoad: payload };
				}
			});
			return { ...state, onLoad: selectedCat.onLoad };
		default:
			return initialState;
	}
}

export default categoryReducer;
