import { createStore, combineReducers, applyMiddleware } from 'redux';
import categoryReducer from './category';
import productReducer from './product';
import cartReducer from './cart';
import thunk from './middleware/thunk';

let reducers = combineReducers({
	category: categoryReducer,
	product: productReducer,
	cart: cartReducer,
});

// create our "store" - stands for storage not storefront :P
const store = () => {
	return createStore(reducers, applyMiddleware(thunk));
};

export default store;
