import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

class NavBar extends Component
{
	render(): JSX.Element
	{
		return (
			<AppBar position="fixed" style={{ background: 'transparent' }}>
				<Toolbar variant="dense">
					<Grid container direction="row" justify="space-around" alignItems="center">
						<Button size='large' color="inherit">Home</Button>
						<Button size='large' color="inherit">Projects</Button>
						<Button size='large' color="inherit">Level Design</Button>
					</Grid>
				</Toolbar>
			</AppBar>
		);
	}
}

export default NavBar;