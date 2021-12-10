import { createStore, combineReducers } from 'redux';
import categoryReducer from './category';
import productReducer from './product';
import cartReducer from './cart';

let reducers = combineReducers({
	category: categoryReducer,
	product: productReducer,
	cart: cartReducer,
});

// create our "store" - stands for storage not storefront :P
const store = () => {
	return createStore(reducers);
};

export default store;
