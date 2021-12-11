import { React, useState } from 'react';
import Box from '@mui/material/Box';
import Products from './Products/Products';
import { connect } from 'react-redux';
import ViewCart from './Cart/View';
import Header from './Header';
import Footer from './Footer';

function Main(props) {
	const [showCart, setShowCart] = useState(false);

	const showCartHandler = (e) => setShowCart(true);

	const hideCartHandler = () => setShowCart(false);
	return (
		<>
			<Header
				showCartHandler={showCartHandler}
				hideCartHandler={hideCartHandler}
			/>

			{props.categorySelect.onLoad ? (
				<h1>{props.categorySelect.onLoad} Products</h1>
			) : (
				<h1>Welcome to StoreFront</h1>
			)}
			{!showCart ? (
				<Box
					sx={
						({ display: 'flex' },
						{ flexDirection: 'row' },
						{ margin: 5 },
						{ justifyContent: 'center' },
						{ alignItems: 'center' })
					}
				>
					<Products />
				</Box>
			) : (
				<ViewCart />
			)}

			<Footer />
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		categorySelect: state.category,
	};
};

///TODO
//// NEed to fixx the rendering of the Catefgory

export default connect(mapStateToProps)(Main);
