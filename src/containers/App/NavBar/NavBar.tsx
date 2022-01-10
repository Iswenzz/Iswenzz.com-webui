import React, { FC, useState, memo, useEffect } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";
import { Fab, Typography, Drawer, AppBarProps } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../../App";
import { Flare, Brightness3 } from "@material-ui/icons";
import {AnimatePresence, motion} from "framer-motion";
import MenuIcon from "@material-ui/icons/Menu";
import { useScroll } from "react-use-gesture";
import LanguagePicker from "../LanguagePicker/LanguagePicker";
import {Trans} from "react-i18next";
import "./NavBar.scss";
import { toggleDarkMode, toggleModalActive } from "App/redux";

const animationFixed = {
	enter: { 
		opacity: 1,
		scale: 1,
		transition: { 
			duration: 0.5,
			ease: "easeOut"
		}
	},
	exit: {
		opacity: 0,
		scale: 1.5,
		transition: { 
			duration: 0.5,
			ease: "easeIn"
		}
	}
};

const animationAbsolute = {
	enter: { 
		opacity: 1,
		scale: 1,
		transition: { 
			duration: 0.25,
			ease: "easeOut"
		}
	},
	exit: {
		opacity: 0,
		scale: 0,
		transition: { 
			duration: 0.25,
			ease: "easeIn"
		}
	}
};

const scrollConfig = {
	domTarget: window,
	eventOptions: { passive: true }
};

/**
 * Navigation container with links to different sections.
 * @param props - AppBarProps
 */
export const NavBar: FC<AppBarProps> = (props: AppBarProps): JSX.Element =>
{
	const dispatch = useDispatch();
	const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);
	const projectModalActive = useSelector((state: AppState) => state.home.projectModalActive);

	const isPortrait = useMediaQuery({ orientation: "portrait" });
	const isTabletOrMobileDevice = useMediaQuery({ query: "(max-device-width: 1224px)" });
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
	const [isFixedNavbar, setFixedNavbar] = useState<boolean>(false);

	/**
	 * Scroll callback to set the fixed navbar when past the intro header.
	 */
	const scroll = useScroll(({ event }: any) => 
	{
		let isPastHeader: boolean = window.scrollY >= window.innerHeight;
		if (isPastHeader !== isFixedNavbar)
			setFixedNavbar(isPastHeader);
	}, scrollConfig);
	  
	useEffect(scroll, [scroll]);

	/**
	 * Toggle dark/light mode callback.
	 */
	const toggleColorMode = (): void =>
	{
		dispatch(toggleDarkMode(!isDarkMode));
		localStorage.setItem("isDarkMode", (!isDarkMode).toString());
	};

	/**
	 * Toggle the mobile drawer.
	 * @param visible - Visible state.
	 */
	const toggleDrawer = (visible: boolean): void =>
	{
		setDrawerOpen(visible);
		dispatch(toggleModalActive(visible));
	};

	/**
	 * Check if the fixed navbar should be shown.
	 */
	const canShowFixedNavBar = (): boolean =>
	{
		return !projectModalActive && isFixedNavbar;
	};

	/**
	 * Navbar links.
	 */
	const navBarElements: JSX.Element = (
		<>
			<li>
				<Link className="navbar-button" to="header-section" smooth onClick={() => toggleDrawer(false)}>
					<Button size='large' color="inherit">
						<Trans>NAVBAR_ABOUT</Trans>
					</Button>
				</Link>
			</li>
			<li>
				<Link className="navbar-button" to="projects-section" smooth onClick={() => toggleDrawer(false)}
					offset={isTabletOrMobileDevice ? 50 : 10}>
					<Button size='large' color="inherit">
						<Trans>NAVBAR_PROJECTS</Trans>
					</Button>
				</Link>
			</li>
			<li>
				<Link className="navbar-button" to="level-design-section" smooth onClick={() => toggleDrawer(false)}
					offset={isTabletOrMobileDevice ? 30 : 180}>
					<Button size='large' color="inherit">
						<Trans>NAVBAR_LEVEL_DESIGN</Trans>
					</Button>
				</Link>
			</li>
			<li>
				<Link className="navbar-button" to="contact-section" smooth onClick={() => toggleDrawer(false)}
					offset={0}>
					<Button size='large' color="inherit">
						<Trans>NAVBAR_CONTACT</Trans>
					</Button>
				</Link>
			</li>
		</>
	);

	/**
	 * Desktop navbar.
	 */
	const navBarButtonsDesktop: JSX.Element = (
		<Grid component="ul" container direction="row" justifyContent="flex-end" alignItems="center">
			{navBarElements}
			<li>
				<Fab className="navbar-button" style={{ color: isDarkMode ? "goldenrod" : "gainsboro" }} 
					size='small' onClick={toggleColorMode}>
					{isDarkMode ? <Flare /> : <Brightness3 />}
				</Fab>
			</li>
			<li>
				<LanguagePicker />
			</li>
		</Grid>
	);

	/**
	 * Mobile navbar.
	 */
	const navBarButtonsMobile: JSX.Element = (
		<Grid component="ul" container direction="row" justifyContent="flex-end" alignItems="center">
			<li>
				<Fab className="navbar-button" style={{ color: isDarkMode ? "goldenrod" : "gainsboro" }} 
					size='small' onClick={toggleColorMode}>
					{isDarkMode ? <Flare /> : <Brightness3 />}
				</Fab>
			</li>
			<li>
				<LanguagePicker />
			</li>
			<li>
				<Fab className="navbar-button" color="inherit" size='small' 
					onClick={() => toggleDrawer(!drawerOpen)}>
					<MenuIcon />
				</Fab>
			</li>
			<li>
				<Drawer variant="persistent" anchor="top" open={drawerOpen} onClose={() => toggleDrawer(false)} 
					PaperProps={{ style: { backgroundColor: "rgba(50, 50, 50, 0.3)", color: "gainsboro", top: "48px" }}}>
					<section role="presentation" onClick={() => toggleDrawer(false)} onKeyDown={() => toggleDrawer(false)}>
						<Grid component="ul" container direction="column" justifyContent="center" alignItems="center">
							{navBarElements}
						</Grid>
					</section>
				</Drawer>
			</li>
		</Grid>
	);

	/**
	 * Responsive navbar.
	 */
	const navBar: JSX.Element = (
		<AppBar component="nav" {...props} position={canShowFixedNavBar() ? "fixed" : "absolute"}>
			<Toolbar variant="dense">
				<Grid component="section" container spacing={3}>
					<Grid component="figure" item xs={3}>
						<Typography className="navbar-logo" align="center" variant="h4" component="h4">
							Iswenzz
						</Typography>
					</Grid>
					<Grid component="section" item xs={9}>
						{isTabletOrMobileDevice || isPortrait ? navBarButtonsMobile : navBarButtonsDesktop}
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);

	const showFixed = canShowFixedNavBar() || process.env.NODE_ENV === "test";
	return (
		<nav className="navbar">
			<AnimatePresence>
				{showFixed && (
					<motion.div initial={animationFixed.exit} animate={animationFixed.enter} exit={animationFixed.exit}
						className="navbar-fixed">
						{navBar}
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{!showFixed && (
					<motion.div initial={animationAbsolute.enter} animate={animationAbsolute.enter} exit={animationAbsolute.exit}
						className="navbar-absolute">
						{navBar}
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default memo(NavBar);