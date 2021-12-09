import React from 'react';

const CategoryContext = React.createContext();
let initialState = {
	category: ['All', 'VideoGame', 'Books', 'Wine'],
	onLoad: null,
};

function categoryReducer(state = initialState, action) {
	let { type, payload } = action;
	switch (type) {
		case 'CATEGORY_CHOICE':
			let categoryChoice = state.category.map((category) => {
				if (category === payload) {
					return { ...category, onLoad: payload };
				} else {
					return { ...category, onload: null };
				}
			});
			return { categoryChoice };
		default:
			return state;
	}
}

function CategoryProvider({ children }) {
	return (
		<CategoryContext.Provider value={initialState}>
			{children}
		</CategoryContext.Provider>
	);
}

export { categoryReducer, CategoryProvider, CategoryContext };
