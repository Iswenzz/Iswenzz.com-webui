import { FC, useState, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppBarProps, useTheme, AppBar, Toolbar, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useResponsive } from "@izui/react/types";

import { isPastWindowHeight, setModalActive, setTheme } from "App/redux";

import { animationAbsolute, animationFixed } from "./config";
import NavBarLogo from "./NavBarLogo/NavBarLogo";
import NavBarDesktop from "./NavBarDesktop/NavBarDesktop";
import NavBarMobile from "./NavBarMobile/NavBarMobile";
import NavBarAnimation from "./NavBarAnimation/NavBarAnimation";

import scss from "./NavBar.module.scss";

/**
 * Navigation container with links to different sections.
 */
const NavBar: FC<AppBarProps> = (): Nullable<JSX.Element> => {
	const dispatch = useDispatch();
	const pastWindowHeight = useSelector(isPastWindowHeight);

	const { isDarkTheme } = useTheme();
	const [isDrawerOpen, setDrawerOpen] = useState(false);

	const toggleThemeMode = () => dispatch(setTheme(isDarkTheme ? "light" : "dark"));

	const toggleDrawer = (visible: boolean) => {
		setDrawerOpen(visible);
		dispatch(setModalActive(visible));
	};

	const navBarButtons = useResponsive({
		desktop: <NavBarDesktop toggleDrawer={toggleDrawer} toggleThemeMode={toggleThemeMode} />,
		mobile: (
			<NavBarMobile
				toggleDrawer={toggleDrawer}
				toggleThemeMode={toggleThemeMode}
				isDrawerOpen={isDrawerOpen}
			/>
		)
	});

	return (
		<NavBarAnimation isFixed={pastWindowHeight}>
			<motion.div
				className={pastWindowHeight ? scss.fixed : scss.absolute}
				variants={pastWindowHeight ? animationFixed : animationAbsolute}
				initial={pastWindowHeight ? "exit" : "enter"}
				animate="enter"
				exit="exit"
			>
				<AppBar
					className={scss.navbar}
					component="nav"
					position={pastWindowHeight ? "fixed" : "absolute"}
				>
					<Toolbar variant="dense">
						<Grid component="section" container>
							<Grid component="figure" item xs={3}>
								<Grid
									container
									component="section"
									justifyContent="center"
									alignItems="center"
								>
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
