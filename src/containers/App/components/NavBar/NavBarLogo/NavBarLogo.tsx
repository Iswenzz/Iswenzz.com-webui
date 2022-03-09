import { FC } from "react";
import { useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Link as DOMLink, Text } from "@izui/react";
import { ButtonBase } from "@mui/material";

import scss from "../NavBar.module.scss";

/**
 * Navbar logo with redirect/scroll.
 */
const NavBarLogo: FC = () =>
{
	const location = useLocation();

	const Link: FC = ({ children }) => location.pathname === "/"
		? <ScrollLink className="nolink" href="/" to="header-section" smooth>{children}</ScrollLink>
		: <DOMLink className="nolink" to="/">{children}</DOMLink>;

	return (
		<ButtonBase>
			<Link>
				<Text className={scss.logo} align="center" variant="h4" component="h4">
					Iswenzz
				</Text>
			</Link>
		</ButtonBase>
	);
};

export default NavBarLogo;
