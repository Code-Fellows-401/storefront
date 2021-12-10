import * as React from 'react';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
import { connect } from 'react-redux';

function Category() {
	return (
		<Box>
			<Button variant='text'>Cat 1</Button>
			<Button variant='text'>Cat 2</Button>
			<Button variant='text'>Cat 3</Button>
		</Box>
	);
}

const mapStateToProps = state => {votes: state.votes}



const mapDispatchToProps = (dispatch) => ({
	increment: (name) => dispatch({ type: 'ADD_VOTE', payload: name }),
	reset: () => dispatch({ type: 'RESET_VOTES' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);
