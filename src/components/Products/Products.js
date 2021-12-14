import { React, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import { fetchProducts } from '../../store/product';
import { addProduct } from '../../store/product';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { fetchCategories } from '../../store/category';
// import axios from 'axios';

function Products({
	productSelect,
	categoryFilter,
	changeProduct,
	getProducts,
	postProducts,
	addToCart,
	getCategories,
}) {
	useEffect(() => {
		getProducts();
		getCategories();
	}, []);
	return (
		<>
			{productSelect.filtered.map((product) => {
				return (
					<>
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								component='img'
								height='140'
								image={product.pictureURL}
								alt='green iguana'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									{product.productName}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									{product.description}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Price: ${product.cost}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									InStock: {product.quantity}
								</Typography>
							</CardContent>
							<CardActions>
								<Button
									size='small'
									onClick={() => {
										postProducts(product);
									}}
								>
									<AddShoppingCartIcon color='success' />
								</Button>
							</CardActions>
						</Card>
					</>
				);
			})}
		</>
	);
}

const mapStateToProps = (state) => {
	return {
		productSelect: state.product,
		categoryFilter: state.category.onLoad,
	};
};

const mapDispatchToProps = (dispatch) => ({
	changeProduct: (name) => dispatch({ type: 'CATEGORY_CHOICE', payload: name }),
	addToCart: (product) => dispatch({ type: 'ADD_TO_CART', payload: product }),
	getProducts: () => dispatch(fetchProducts()),
	postProducts: (product) => dispatch(addProduct(product)),
	getCategories: () => dispatch(fetchCategories()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Products);
