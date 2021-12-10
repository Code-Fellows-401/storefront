import { React } from 'react';
import Box from '@mui/material/Box';
import Products from './Category/Products';
import { connect } from 'react-redux';

function Main(props) {
	return (
		<Box sx={({ display: 'flex' }, { flexDirection: 'row' }, { margin: '5' })}>
			{props.categorySelect ? (
				<h1>{props.categorySelect.displayName}</h1>
			) : (
				<h1>All Products</h1>
			)}

			<Products />
		</Box>
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
