import React, { Component } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Parallax } from 'react-parallax';
import { Theme, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';

import NavBar from './containers/NavBar/NavBar';
import RadialGradient from './components/RadialGradient/RadialGradient';
import Footer from './containers/Footer/Footer';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

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
					{/* Intro */}
					<Parallax bgImage={require('./assets/images/index/1.jpg')} bgImageAlt="index bg1" strength={500}>
						<div style={{ height: '200px' }} />
						<Grid container direction="row" justify="center" alignItems="center">
							<Typography style={{fontFamily: "Exo, sans-serif", fontWeight: 1000,
							color: 'rgba(220, 220, 220, 0.9)'}} align="center" variant="h3" component="h2">
								<div style={{fontFamily: "'Press Start 2P', cursive", fontSize: 60}}>Iswenzz</div><br />
								Software Engineer and Level Designer
							</Typography>
						</Grid>
						<div style={{ height: '200px' }} />
					</Parallax>
					{/* About */}
					<RadialGradient height='600px' position='ellipse at bottom' colors={[
						{ color: '#23272B', colorPercent: '0%' },
						{ color: '#090A0A', colorPercent: '100%' }
					]} />
					<Parallax bgImage={require('./assets/images/index/2.jpg')} bgImageAlt="index bg2" strength={500}>
						<div style={{ height: '500px' }} />
					</Parallax>
					{/* Projects */}
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