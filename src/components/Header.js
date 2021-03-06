import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Headermenu from './Menu/Menu';
import CartMenu from './Cart/Cart';

function Header(props) {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position='static' style={{ background: '#2E3B55' }}>
				<Toolbar>
					<IconButton
						size='large'
						edge='start'
						color='inherit'
						aria-label='menu'
						sx={{ mr: 2 }}
					>
						<Headermenu hideCartHandler={props.hideCartHandler} />
					</IconButton>
					<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
						StoreFront
					</Typography>
					<CartMenu showCartHandler={props.showCartHandler} />
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Header;
