import { createStore, combineReducers } from 'redux';
import { categoryReducer } from './category';
import productReducer from './product';

let reducers = combineReducers({
	category: categoryReducer,
	product: productReducer,
});

// create our "store" - stands for storage not storefront :P
const store = () => {
	return createStore(reducers);
};

export default store;
