import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/index';
import { CategoryProvider } from './store/category';

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store()}>
			<CategoryProvider>
				<App />
			</CategoryProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);
