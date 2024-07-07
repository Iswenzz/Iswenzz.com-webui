import { FC } from "react";
import { Fab, Grid } from "@mui/material";
import { MdFlare, MdBrightness3 } from "react-icons/md";
import { useThemeMode } from "@izui/react";

import { LanguagePicker } from "App/components";

import NavBarLinks from "../NavBarLinks/NavBarLinks";
import scss from "../NavBar.module.scss";

/**
 * Desktop navbar.
 */
const NavBarDesktop: FC<Props> = ({ toggleDrawer, toggleThemeMode }) => {
	const { icon, color } = useThemeMode({
		icon: [<MdFlare key="flare" />, <MdBrightness3 key="brightness" />],
		color: ["goldenrod", "gainsboro"]
	});
	return (
		<Grid
			className={scss.buttons}
			component="ul"
			container
			justifyContent="flex-end"
			alignItems="center"
		>
			<NavBarLinks toggleDrawer={toggleDrawer} />
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
		</Grid>
	);
};

type Props = {
	toggleDrawer: (state: boolean) => void;
	toggleThemeMode: () => void;
};

export default NavBarDesktop;
