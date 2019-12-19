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
			<AppBar position="fixed">
				<Toolbar variant="dense">
					<Grid container direction="row" justify="space-around" alignItems="center">
						<Button color="inherit">Iswenzz</Button>
						<Button color="inherit">Projects</Button>
						<Button color="inherit">Level Design</Button>
					</Grid>
				</Toolbar>
			</AppBar>
		);
	}
}

export default NavBar;