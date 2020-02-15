import React, { FunctionComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import * as actions from '../../../store/actions';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from "react-scroll";
import { useMediaQuery } from 'react-responsive';
import { Fab } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../../application';
import { Flare, Brightness3 } from '@material-ui/icons';

export const NavBar: FunctionComponent = (): JSX.Element =>
{
	const dispatch = useDispatch();
	const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);
	const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' });

	const toggleDarkMode = (): void =>
	{
		dispatch(actions.toggleDarkMode(!isDarkMode));
		localStorage.setItem('isDarkMode', (!isDarkMode).toString());
	}

	return (
		<AppBar id="Navbar" position="absolute" style={{ background: 'transparent' }}>
			<Toolbar variant="dense">
				<Grid container direction="row" justify="space-around" alignItems="center">
					<Link to="projects-section" smooth>
						<Button size='large' color="inherit">Projects</Button>
					</Link>
					<Link to="level-design-section" smooth 
					offset={isTabletOrMobileDevice ? 0 : 70}>
						<Button size='large' color="inherit">Level Design</Button>
					</Link>
					<Link to="contact-section" smooth
					offset={isTabletOrMobileDevice ? 100 : 70}>
						<Button size='large' color="inherit">Contact</Button>
					</Link>
					<Fab style={{ backgroundColor: 'transparent', color: isDarkMode ? 'goldenrod' : 'gainsboro' }} 
					size='small' onClick={toggleDarkMode}>
						{isDarkMode ? <Flare /> : <Brightness3 />}
					</Fab>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}

export default NavBar;