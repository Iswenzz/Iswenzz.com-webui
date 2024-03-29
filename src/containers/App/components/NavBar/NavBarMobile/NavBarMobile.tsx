import { FC } from "react";
import { Fab, Drawer, Grid } from "@mui/material";
import Flare from "@mui/icons-material/Flare";
import Menu from "@mui/icons-material/Menu";
import Brightness3 from "@mui/icons-material/Brightness3";
import { useThemeMode } from "@izui/react";

import { LanguagePicker } from "App/components";

import { paperProps } from "./config";
import NavBarLinks from "../NavBarLinks/NavBarLinks";
import scss from "../NavBar.module.scss";

/**
* Mobile navbar.
*/
const NavBarMobile: FC<NavBarMobileProps> = ({ toggleDrawer, toggleThemeMode, isDrawerOpen }) =>
{
	const { icon, color } = useThemeMode({
		icon: [<Flare key="flare" />, <Brightness3 key="brightness" />],
		color: ["goldenrod", "gainsboro"]
	});

	/**
	 * Toggle the drawer.
	 * @returns
	 */
	const handleToggle = () => toggleDrawer(!isDrawerOpen);

	/**
	 * Close the drawer.
	 * @returns
	 */
	const handleClose = () => toggleDrawer(false);

	return (
		<>
			<Grid className={scss.buttons} component="ul" container justifyContent="flex-end" alignItems="center">
				<li>
					<Fab className={scss.button} style={{ color }} size="small" onClick={toggleThemeMode}>
						{icon}
					</Fab>
				</li>
				<li>
					<LanguagePicker />
				</li>
				<li>
					<Fab className={scss.button} color="inherit" size="small" onClick={handleToggle}>
						<Menu />
					</Fab>
				</li>
			</Grid>
			<Drawer anchor="top" open={isDrawerOpen} onClose={handleClose} PaperProps={paperProps}>
				<section role="presentation" onClick={handleClose} onKeyDown={handleClose}>
					<Grid component="ul" container direction="column" justifyContent="center" alignItems="center">
						<NavBarLinks toggleDrawer={toggleDrawer} />
					</Grid>
				</section>
			</Drawer>
		</>
	);
};

type NavBarMobileProps = {
	toggleDrawer: (state: boolean) => void,
	toggleThemeMode: () => void,
	isDrawerOpen: boolean
};

export default NavBarMobile;
