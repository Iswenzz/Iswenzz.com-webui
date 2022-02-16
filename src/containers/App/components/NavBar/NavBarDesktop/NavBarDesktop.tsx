import { FC } from "react";
import { Fab, Grid } from "@mui/material";
import Flare from "@mui/icons-material/Flare";
import Brightness3 from "@mui/icons-material/Brightness3";
import { useThemeMode } from "@izui/react";

import { LanguagePicker } from "App/components";

import NavBarLinks from "../NavBarLinks/NavBarLinks";
import scss from "../NavBar.module.scss";

/**
* Desktop navbar.
*/
const NavBarDesktop: FC<NavBarDesktopProps> = ({ toggleDrawer, toggleThemeMode }) =>
{
	const { icon, color } = useThemeMode({
		icon: [<Flare />, <Brightness3 />],
		color: ["goldenrod", "gainsboro"]
	});

	return (
		<Grid className={scss.buttons} component="ul" container justifyContent="flex-end" alignItems="center">
			<NavBarLinks toggleDrawer={toggleDrawer} />
			<li>
				<Fab className={scss.button} style={{ color }} size="small" onClick={toggleThemeMode}>
					{icon}
				</Fab>
			</li>
			<li>
				<LanguagePicker />
			</li>
		</Grid>
	);
};

type NavBarDesktopProps = {
	toggleDrawer: (state: boolean) => void,
	toggleThemeMode: () => void
};

export default NavBarDesktop;
