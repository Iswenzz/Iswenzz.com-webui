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
import posed, { PoseGroup } from 'react-pose';

const Animation = posed.div({
	enter: { 
		opacity: 1,
		scale: 1,
		transition: { 
			duration: 500,
			ease: 'easeOut'
		}
	},
	exit: {
		opacity: 0,
		scale: 1.5,
		transition: { 
			duration: 500,
			ease: 'easeIn'
		}
	}
});

export interface NavBarProps
{
	variant?: 'regular' | 'dense',
	style?: React.CSSProperties,
	id?: string
}

export const NavBar: FunctionComponent<NavBarProps> = (props: NavBarProps): JSX.Element =>
{
	const dispatch = useDispatch();
	const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);
	const isPastIntro = useSelector((state: AppState) => state.app.isPastIntro);
	const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' });

	const toggleDarkMode = (): void =>
	{
		dispatch(actions.toggleDarkMode(!isDarkMode));
		localStorage.setItem('isDarkMode', (!isDarkMode).toString());
	}

	const navBar: JSX.Element = (
		<AppBar id={props.id} position={isPastIntro ? "fixed" : "absolute"} style={{ ...props.style }}>
			<Toolbar variant={props.variant || "dense"}>
				<Grid container direction="row" justify="space-around" alignItems="center">
					<Link to="projects-section" smooth
					offset={isTabletOrMobileDevice ? 200 : 100}>
						<Button size='large' color="inherit">Projects</Button>
					</Link>
					<Link to="level-design-section" smooth 
					offset={isTabletOrMobileDevice ? 30 : 125}>
						<Button size='large' color="inherit">Level Design</Button>
					</Link>
					<Link to="contact-section" smooth
					offset={isTabletOrMobileDevice ? 100 : 60}>
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

	return (
		<PoseGroup flipMove={false}>
		{isPastIntro ? [
			<Animation style={{ zIndex: 4000, top: 0, position: "fixed", width: '100%' }} key="navBar-anim">
			{navBar}
			</Animation>
		] : [
			<div key="navBar-noanim">
			{navBar}
			</div>
		]}
		</PoseGroup>
	);
}

export default NavBar;