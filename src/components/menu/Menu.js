import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { connect } from 'react-redux';

function Headermenu(props) {
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
				<MenuIcon />
			</Button>

			<Menu
				id='basic-menu'
				anchorEl={anchorEl}
				open={open}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}
			>
				{props.categorySelect.map((item, key) => (
					<MenuItem
						key={key}
						name={item.displayName}
						onClick={() => {
							props.changeCategory(item.displayName);
							setAnchorEl(null);
							props.hideCartHandler();
						}}
					>
						{item.displayName}
					</MenuItem>
				))}
			</Menu>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		categorySelect: state.category.category,
	};
};

const mapDispatchToProps = (dispatch) => ({
	changeCategory: (name) =>
		dispatch({ type: 'CATEGORY_CHOICE', payload: name }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Headermenu);
