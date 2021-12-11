import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { connect } from 'react-redux';

function CartMenu(props) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	return (
		<div>
			<Button
				style={{ background: '#2E3B55' }}
				id='basic-button'
				aria-controls='basic-menu'
				aria-haspopup='true'
				aria-expanded={open ? 'true' : undefined}
				onClick={handleClick}
				color='inherit'
			>
				Cart({props.cartState.itemCount})
			</Button>

			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				<MenuItem
					onClick={() => {
						props.showCartHandler();
						setAnchorEl(null);
					}}
				>
					View Cart
				</MenuItem>
				<MenuItem
					onClick={() => {
						setAnchorEl(null);
					}}
				>
					Checkout
				</MenuItem>
			</Menu>
		</div>
	);
}

const mapStateToProps = (state) => {

	return {
		cartState: state.cart,
	};
};

export default connect(mapStateToProps)(CartMenu);
