import { FC, useState, memo } from "react";
import { useDispatch } from "react-redux";
import { AppBarProps, useTheme, AppBar, Toolbar, Grid  } from "@mui/material";
import { motion } from "framer-motion";
import { useScroll } from "@use-gesture/react";

import { setModalActive, setTheme } from "App/redux";
import useResponsive from "utils/hooks/useResponsive";
import { scrollConfig } from "utils/config";

import { animationAbsolute, animationFixed } from "./config";
import NavBarLogo from "./NavBarLogo/NavBarLogo";
import NavBarDesktop from "./NavBarDesktop/NavBarDesktop";
import NavBarMobile from "./NavBarMobile/NavBarMobile";
import NavBarAnimation from "./NavBarAnimation/NavBarAnimation";

import scss from "./NavBar.module.scss";

/**
 * Navigation container with links to different sections.
 */
const NavBar: FC<AppBarProps> = (): Nullable<JSX.Element> =>
{
	const dispatch = useDispatch();

	const { isDarkTheme } = useTheme();

	const [isFixed, setFixed] = useState<boolean>(false);
	const [isDrawerOpen, setDrawerOpen] = useState<boolean>(false);

	/**
	 * Toggle dark/light mode callback.
	 */
	const toggleThemeMode = () => dispatch(setTheme(isDarkTheme ? "light" : "dark"));

	/**
	 * Toggle the mobile drawer.
	 * @param visible - Visible state.
	 */
	const toggleDrawer = (visible: boolean) =>
	{
		setDrawerOpen(visible);
		dispatch(setModalActive(visible));
	};

	/**
	 * Scroll callback to set the fixed navbar.
	 */
	useScroll(() =>
	{
		const isPastWindowHeight = window.scrollY >= window.innerHeight;
		if (isPastWindowHeight !== isFixed)
			setFixed(isPastWindowHeight);
	}, scrollConfig);

	/**
	 * Responsive buttons.
	 */
	const navBarButtons = useResponsive({
		desktop: <NavBarDesktop toggleDrawer={toggleDrawer} toggleThemeMode={toggleThemeMode} />,
		mobile: <NavBarMobile toggleDrawer={toggleDrawer} toggleThemeMode={toggleThemeMode} isDrawerOpen={isDrawerOpen} />
	});

	return (
		<NavBarAnimation isFixed={isFixed}>
			<motion.div
				className={isFixed ? scss.fixed : scss.absolute}
				variants={isFixed ? animationFixed : animationAbsolute}
				initial={isFixed ? "exit" : "enter"}
				animate={"enter"} exit={"exit"}>
				<AppBar className={scss.navbar}
					component="nav" position={isFixed ? "fixed" : "absolute"}>
					<Toolbar variant="dense">
						<Grid component="section" container>
							<Grid component="figure" item xs={3}>
								<Grid container component="section" justifyContent={"center"} alignItems={"center"}>
									<NavBarLogo />
								</Grid>
							</Grid>
							<Grid component="section" item xs={9}>
								{navBarButtons}
							</Grid>
						</Grid>
					</Toolbar>
				</AppBar>
			</motion.div>
		</NavBarAnimation>
	);
};

export default memo(NavBar);
