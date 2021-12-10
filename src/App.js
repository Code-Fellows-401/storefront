import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { Box } from '@mui/material';

function App(props) {
	return (
		<Box>
			<Header props={props} />
			<Main />
			<Footer />
		</Box>
	);
}

export default App;
