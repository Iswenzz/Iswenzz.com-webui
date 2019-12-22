import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Theme, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Home from './containers/Home/Home';

let theme: Theme = createMuiTheme({
	palette: {
		primary: { // Discord hex
			light: '#99aab5',
			main: '#2c2f33',
			dark: '#23272a',
			contrastText: '#dcdcdc',
		},
	},
});
theme = responsiveFontSizes(theme);

class App extends Component
{
	render(): JSX.Element
	{
		return (
			<ParallaxProvider>
				<ThemeProvider theme={theme}> 
					<Home />
				</ThemeProvider>
			</ParallaxProvider>
		);
	}
}

export default App;