import React, { Component } from 'react';
import NavBar from './containers/NavBar/NavBar';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax';

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
			<ParallaxProvider>
				<ThemeProvider theme={theme}>
					<NavBar />
					<ParallaxBanner 
					layers={[{ image: 'https://iswenzz.com/assets/images/medieval_village/3.jpg', 
						amount: 0.4, children: null}]} style={{height: '400px'}}>
					</ParallaxBanner>

					{/* Scroll Test */}
					<div style={{ height: '1200px' }} />
				</ThemeProvider>
			</ParallaxProvider>
		);
	}
}

export default App;