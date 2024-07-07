import { FC } from "react";
import { Fab, Drawer, Grid } from "@mui/material";
import { MdFlare, MdMenu, MdBrightness3 } from "react-icons/md";
import { useThemeMode } from "@izui/react";

import { LanguagePicker } from "App/components";

import { paperProps } from "./config";
import NavBarLinks from "../NavBarLinks/NavBarLinks";

import scss from "../NavBar.module.scss";

/**
 * Mobile navbar.
 */
const NavBarMobile: FC<Props> = ({ toggleDrawer, toggleThemeMode, isDrawerOpen }) => {
	const { icon, color } = useThemeMode({
		icon: [<MdFlare key="flare" />, <MdBrightness3 key="brightness" />],
		color: ["goldenrod", "gainsboro"]
	});

	const handleToggle = () => toggleDrawer(!isDrawerOpen);
	const handleClose = () => toggleDrawer(false);

	return (
		<>
			<Grid
				className={scss.buttons}
				component="ul"
				container
				justifyContent="flex-end"
				alignItems="center"
			>
				<li>
					<Fab
						className={scss.button}
						style={{ color }}
						size="small"
						onClick={toggleThemeMode}
					>
						{icon}
					</Fab>
				</li>
				<li>
					<LanguagePicker />
				</li>
				<li>
					<Fab
						className={scss.button}
						color="inherit"
						size="small"
						onClick={handleToggle}
					>
						<MdMenu />
					</Fab>
				</li>
			</Grid>
			<Drawer anchor="top" open={isDrawerOpen} onClose={handleClose} PaperProps={paperProps}>
				<section role="presentation" onClick={handleClose} onKeyDown={handleClose}>
					<Grid
						component="ul"
						container
						direction="column"
						justifyContent="center"
						alignItems="center"
					>
						<NavBarLinks toggleDrawer={toggleDrawer} />
					</Grid>
				</section>
			</Drawer>
		</>
	);
};

type Props = {
	toggleDrawer: (state: boolean) => void;
	toggleThemeMode: () => void;
	isDrawerOpen: boolean;
};

export default NavBarMobile;
