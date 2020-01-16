import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Theme, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Home from './containers/Home/Home';

const isDarkMode: boolean = true;

let theme: Theme = createMuiTheme({
	overrides: {
		MuiTooltip: {
			tooltip: {
			  fontSize: "1em",
			}
		}
	},
	palette: {
		type: isDarkMode ? 'dark' : 'light',
		text: {
			primary: `rgba(${isDarkMode ? 220 : 60}, ${isDarkMode ? 220 : 60}, ${isDarkMode ? 220 : 60}, 0.87)`,
			secondary: `rgba(${isDarkMode ? 220 : 60},${isDarkMode ? 220 : 60}, ${isDarkMode ? 220 : 60}, 0.54)`,
			disabled: `rgba(${isDarkMode ? 220 : 60}, ${isDarkMode ? 220 : 60}, ${isDarkMode ? 220 : 60}, 0.38)`,
			hint: `rgba(${isDarkMode ? 220 : 60}, ${isDarkMode ? 220 : 60}, ${isDarkMode ? 220 : 60}, 0.38)`,
		},
		primary: {
			light: '#99aab5',
			main: '#2c2f33',
			dark: '#23272a',
			contrastText: '#dcdcdc',
		},
		secondary: {
			light: '#ff4081',
			main: '#f50057',
			dark: '#c51162',
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