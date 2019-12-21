import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-parallax';
import { Theme, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import NavBar from './containers/NavBar/NavBar';
import RadialGradient from './components/RadialGradient/RadialGradient';
import Footer from './containers/Footer/Footer';
import Intro from './containers/Intro/Intro';

class App extends Component
{
	render(): JSX.Element
	{
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

		return (
			<ParallaxProvider>
				<ThemeProvider theme={theme}> 
					<NavBar />
					<Intro />
					{/* Projects */}
					<Parallax bgImage={require('./assets/images/index/2.jpg')} bgImageAlt="index bg2" strength={500}>
						<div style={{ height: '500px' }} />
					</Parallax>
					<RadialGradient height='600px' position='ellipse at bottom' colors={[
						{ color: '#23272B', colorPercent: '0%' },
						{ color: '#090A0A', colorPercent: '100%' }
					]} />
					{/* Level Design */}
					<Footer />
				</ThemeProvider>
			</ParallaxProvider>
		);
	}
}

export default App;