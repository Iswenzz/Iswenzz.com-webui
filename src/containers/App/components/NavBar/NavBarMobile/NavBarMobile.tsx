import { FC } from "react";
import { Fab, Drawer, Grid } from "@mui/material";
import { Flare, Menu, Brightness3 } from "@mui/icons-material";
import { useThemeMode } from "izui-react";

import { LanguagePicker } from "App/components";

import NavBarLinks from "../NavBarLinks/NavBarLinks";
import scss from "../NavBar.module.scss";

/**
* Mobile navbar.
*/
const NavBarMobile: FC<NavBarMobileProps> = ({ toggleDrawer, toggleThemeMode, isDrawerOpen }) =>
{
	const { icon, color } = useThemeMode({
		icon: [<Flare />, <Brightness3 />],
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
			<Grid component="ul" container justifyContent="flex-end" alignItems="center">
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
			<Drawer variant="persistent" anchor="top" open={isDrawerOpen} onClose={handleClose}
				PaperProps={{ style: { backgroundColor: "rgba(50, 50, 50, 0.3)", color: "gainsboro", top: "48px" }}}>
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
