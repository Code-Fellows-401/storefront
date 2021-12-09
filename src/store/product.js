let initialState = {
	products: [
		{
			productName: 'Halo Infinite',
			description: 'MAster Chief Kicks Grunts and falls in love with A.I',
			pictureURL:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/1200px-Stray_kitten_Rambo002.jpg',
			category: 'VideoGame',
			cost: 60,
			quantity: 117,
		},
		{
			productName: 'The Great Gatsby',
			description:
				'Nick Carroway, Green Lights, Mystery, Murder, Love, Tragedy',
			pictureURL:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/1200px-Stray_kitten_Rambo002.jpg',
			category: 'Books',
			cost: 25,
			quantity: 25,
		},
		{
			productName: '2 Buck Chuck',
			description: 'its $2.. What did you expect',
			pictureURL:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/1200px-Stray_kitten_Rambo002.jpg',
			category: 'Wine',
			cost: 2,
			quantity: 1000000,
		},
	],
};

function productReducer(state = initialState, action) {
	let { type, payload } = action;
	switch (type) {
		case 'CATEGORY_CHOICE':
			if (payload === 'All') {
				return state.products;
			} else {
				const filter = state.products.filter(
					(product) => product.category === payload
				);
				return { products: filter };
			}
		default:
			return state;
	}
}
export default productReducer;
