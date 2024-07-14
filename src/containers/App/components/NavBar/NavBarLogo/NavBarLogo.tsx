import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Link, Text } from "@izui/react";
import { ButtonBase } from "@mui/material";

import scss from "../NavBar.module.scss";

/**
 * Navbar logo with redirect/scroll.
 */
const NavBarLogo: FC = () => {
	const location = useLocation();
	const isLocationRoot = location.pathname === "/";
	return (
		<ButtonBase>
			<Link className="nolink" to={isLocationRoot ? "#header" : "/"} smooth={isLocationRoot}>
				<Text className={scss.logo} align="center" variant="h4" component="h4">
					Iswenzz
				</Text>
			</Link>
		</ButtonBase>
	);
};

export default NavBarLogo;
