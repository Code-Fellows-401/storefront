import { React } from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Products from './Category/Products';
import { connect } from 'react-redux';
import ViewCart from './Cart/View';
import Header from './Header';
import Footer from './Footer';

function Main(props) {
	const [showCart, setShowCart] = useState(false);

	const showCartHandler = (e) => {
		setShowCart(!showCart);
	};

	return (
		<>
			<Header showCartHandler={showCartHandler} />
			<Box
				sx={({ display: 'flex' }, { flexDirection: 'row' }, { margin: '5' })}
			>
				{props.categorySelect ? (
					<h1>{props.categorySelect.displayName}</h1>
				) : (
					<h1>All Products</h1>
				)}
				{!showCart ? <Products /> : <ViewCart />}
			</Box>
			<Footer />
		</>
	);
}

const mapStateToProps = (state) => {
	console.log(state.category.onLoad);
	return {
		categorySelect: state.category,
	};
};

///TODO
//// NEed to fixx the rendering of the Catefgory

export default connect(mapStateToProps)(Main);
