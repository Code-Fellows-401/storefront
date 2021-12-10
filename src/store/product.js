let initialState = {
	products: [
		{
			productName: 'Halo Infinite',
			description: 'Master Chief Kicks Grunts and falls in love with an A.I',
			pictureURL:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/1200px-Stray_kitten_Rambo002.jpg',
			category: 'VideoGame',
			cost: 60,
			quantity: 117,
			cartQuantity: 0,
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
			cartQuantity: 0,
		},
		{
			productName: '2 Buck Chuck',
			description: 'its $2.. What did you expect',
			pictureURL:
				'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Stray_kitten_Rambo002.jpg/1200px-Stray_kitten_Rambo002.jpg',
			category: 'Wine',
			cost: 2,
			quantity: 1000000,
			cartQuantity: 0,
		},
	],
};

function productReducer(state = initialState, action) {
	let { type, payload } = action;
	switch (type) {
		case 'CATEGORY_CHOICE':
			if (payload === 'All') {
				return initialState;
			} else {
				const filter = initialState.products.filter((product) => {
					if (product.category === payload) {
						return { products: product };
					}
				});
				return { products: filter };
			}
		case 'REMOVE_FROM_CART':
			if (state.products.includes(payload)) {
				state.products.filter((product) => {
					if (product === payload) {
						return product.cartQuantity - 1;
					}
				});
			}
			break;
		case 'ADD_TO_CART':
			if (state.products.includes(payload)) {
				let updatedState = initialState.products.map((product) => {
					if (product.productName === payload.productName) {
						console.log(product);
						console.log('in the products ADD');
						product.cartQuantity += 1;
					}
					return product;
				});
				return { ...state, updatedState };
			}
			return initialState;
		default:
			return state;
	}
}
export default productReducer;
