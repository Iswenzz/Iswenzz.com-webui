import React, { FunctionComponent } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from "react-scroll";
import { useMediaQuery } from 'react-responsive';

const NavBar: FunctionComponent = (): JSX.Element =>
{
	const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' });

	return (
		<AppBar id="Navbar" position="absolute" style={{ background: 'transparent' }}>
			<Toolbar variant="dense">
				<Grid container direction="row" justify="space-around" alignItems="center">
					<Link to="projects-section" smooth>
						<Button size='large' color="inherit">Projects</Button>
					</Link>
					<Link to="level-design-section" smooth 
					offset={isTabletOrMobileDevice ? 250 : 70}>
						<Button size='large' color="inherit">Level Design</Button>
					</Link>
					<Link to="contact-section" smooth
					offset={isTabletOrMobileDevice ? 100 : 70}>
						<Button size='large' color="inherit">Contact</Button>
					</Link>
				</Grid>
			</Toolbar>
		</AppBar>
	);
}

export default NavBar;