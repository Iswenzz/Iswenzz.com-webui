import React, { Component } from 'react';
import NavBar from './containers/NavBar/NavBar';

import { Theme, createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

class App extends Component
{
	render(): JSX.Element
	{
		const theme: Theme = createMuiTheme({
			palette: {
				primary: { // Discord hex
					light: '#99aab5',
					main: '#2c2f33',
					dark: '#23272a',
					contrastText: '#dcdcdc',
				},
			},
		});

		return (
			<ThemeProvider theme={theme}>
				<NavBar />
			</ThemeProvider>
		);
	}
}

export default App;