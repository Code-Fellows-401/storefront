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
			console.log(payload);
			if (payload !== 'All') {
				const filter = initialState.products.filter(
					(product) => product.category === payload
				);
				return { ...state, products: filter };
			}
			return initialState;

		case 'ADD_TO_CART':
			let incriment = state.products.map((product) => {
				if (product.productName === payload.productName) {
					if (product.quantity > 0) {
						product.cartQuantity += 1;
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
