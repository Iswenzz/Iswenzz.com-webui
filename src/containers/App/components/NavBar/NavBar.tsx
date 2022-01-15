import { FC, useState, memo, useEffect } from "react";
import { AppBar, Toolbar, Grid, Button } from "@mui/material";
import { Flare, Menu, Brightness3 } from "@mui/icons-material";
import { Link } from "react-scroll";

import { Fab, Typography, Drawer, AppBarProps, useTheme } from "@mui/material";
import { useDispatch } from "react-redux";
import {AnimatePresence, motion} from "framer-motion";
import { useScroll } from "react-use-gesture";
import LanguagePicker from "../LanguagePicker/LanguagePicker";
import {Trans} from "react-i18next";
import { setModalActive } from "App/redux";
import usePortrait from "utils/hooks/usePortrait";
import useTabletOrMobile from "utils/hooks/useTabletOrMobile";

import scss from "./NavBar.module.scss";

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
const NavBar: FC<AppBarProps> = (props: AppBarProps): JSX.Element =>
{
	const dispatch = useDispatch();
	const { isDarkTheme } = useTheme();
	const projectModalActive = false;

	const isPortrait = usePortrait();
	const isTabletOrMobile = useTabletOrMobile();
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
	const [isFixedNavbar, setFixedNavbar] = useState<boolean>(false);

	/**
	 * Scroll callback to set the fixed navbar when past the intro header.
	 */
	const scroll = useScroll(({ event }: any) => 
	{
		const isPastHeader: boolean = window.scrollY >= window.innerHeight;
		if (isPastHeader !== isFixedNavbar)
			setFixedNavbar(isPastHeader);
	}, scrollConfig);
	  
	useEffect(scroll, [scroll]);

	/**
	 * Toggle dark/light mode callback.
	 */
	const toggleColorMode = (): void =>
	{
		// dispatch(toggleDarkMode(!isDarkTheme));
		localStorage.setItem("isDarkTheme", (!isDarkTheme).toString());
	};

	/**
	 * Toggle the mobile drawer.
	 * @param visible - Visible state.
	 */
	const toggleDrawer = (visible: boolean): void =>
	{
		setDrawerOpen(visible);
		dispatch(setModalActive(visible));
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
				<Link className={scss.button} to="header-section" smooth onClick={() => toggleDrawer(false)}>
					<Button size="large" color="inherit">
						<Trans>NAVBAR_ABOUT</Trans>
					</Button>
				</Link>
			</li>
			<li>
				<Link className={scss.button} to="projects-section" smooth onClick={() => toggleDrawer(false)}
					offset={isTabletOrMobile ? 50 : 10}>
					<Button size="large" color="inherit">
						<Trans>NAVBAR_PROJECTS</Trans>
					</Button>
				</Link>
			</li>
			<li>
				<Link className={scss.button} to="level-design-section" smooth onClick={() => toggleDrawer(false)}
					offset={isTabletOrMobile ? 30 : 180}>
					<Button size="large" color="inherit">
						<Trans>NAVBAR_LEVEL_DESIGN</Trans>
					</Button>
				</Link>
			</li>
			<li>
				<Link className={scss.button} to="contact-section" smooth onClick={() => toggleDrawer(false)}
					offset={0}>
					<Button size="large" color="inherit">
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
		<Grid component="ul" container justifyContent="flex-end" alignItems="center">
			{navBarElements}
			<li>
				<Fab className={scss.button} style={{ color: isDarkTheme ? "goldenrod" : "gainsboro" }} 
					size="small" onClick={toggleColorMode}>
					{isDarkTheme ? <Flare /> : <Brightness3 />}
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
		<Grid component="ul" container justifyContent="flex-end" alignItems="center">
			<li>
				<Fab className={scss.button} style={{ color: isDarkTheme ? "goldenrod" : "gainsboro" }} 
					size="small" onClick={toggleColorMode}>
					{isDarkTheme ? <Flare /> : <Brightness3 />}
				</Fab>
			</li>
			<li>
				<LanguagePicker />
			</li>
			<li>
				<Fab className={scss.button} color="inherit" size="small" 
					onClick={() => toggleDrawer(!drawerOpen)}>
					<Menu />
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
						<Typography className={scss.logo} align="center" variant="h4" component="h4">
							Iswenzz
						</Typography>
					</Grid>
					<Grid component="section" item xs={9}>
						{isTabletOrMobile || isPortrait ? navBarButtonsMobile : navBarButtonsDesktop}
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);

	const showFixed = canShowFixedNavBar() || process.env.NODE_ENV === "test";
	return (
		<nav>
			<AnimatePresence>
				{showFixed && (
					<motion.div initial={animationFixed.exit} animate={animationFixed.enter} exit={animationFixed.exit}
						className={scss.fixed}>
						{navBar}
					</motion.div>
				)}
			</AnimatePresence>
			<AnimatePresence>
				{!showFixed && (
					<motion.div initial={animationAbsolute.enter} animate={animationAbsolute.enter} exit={animationAbsolute.exit}
						className={scss.absolute}>
						{navBar}
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default memo(NavBar);
