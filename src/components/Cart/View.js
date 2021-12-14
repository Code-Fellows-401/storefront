import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { connect } from 'react-redux';
import { fetchCart } from '../../store/cart';
import { useEffect } from 'react';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RemoveShoppingCartIcon from '@mui/icons-material/RemoveShoppingCart';

function ViewCart({ getCart, cart, getProducts }) {
	useEffect(() => {
		getCart();
	}, []);

	return (
		<>
			{cart.map((cart) => {
				return (
					<>
						<Card sx={{ maxWidth: 345 }}>
							<CardMedia
								component='img'
								height='140'
								image={cart.pictureURL}
								alt='green iguana'
							/>
							<CardContent>
								<Typography gutterBottom variant='h5' component='div'>
									{cart.productName}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									{cart.description}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									Price: ${cart.cost}
								</Typography>
								<Typography variant='body2' color='text.secondary'>
									InCart: {cart.cartQuantity}
								</Typography>
							</CardContent>
							<CardActions>
								<Button>
									<AddShoppingCartIcon color='success' />
								</Button>
								<Button>
									<RemoveShoppingCartIcon color='error' />
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
		cart: state.cart.cart,
	};
};

const mapDispatchToProps = (dispatch) => ({
	getCart: () => dispatch(fetchCart()),
});
export default connect(mapStateToProps, mapDispatchToProps)(ViewCart);
