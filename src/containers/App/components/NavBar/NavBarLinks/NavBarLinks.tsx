import { FC } from "react";
import { Button } from "@mui/material";
import { Text, Link } from "@izui/react";

import scss from "../NavBar.module.scss";

/**
* Navbar links.
*/
const NavBarLinks: FC<NavBarLinksProps> = ({ toggleDrawer }) =>
{
	/**
	 * Close the drawer.
	 * @returns
	 */
	const handleClose = () => toggleDrawer(false);

	return (
		<>
			<li>
				<Link className={scss.button} to="header" smooth onClick={handleClose}>
					<Button size="large" color="inherit">
						<Text raw>NAVBAR_ABOUT</Text>
					</Button>
				</Link>
			</li>
			<li>
				<Link className={scss.button} to="projects" smooth onClick={handleClose}>
					<Button size="large" color="inherit">
						<Text raw>NAVBAR_PROJECTS</Text>
					</Button>
				</Link>
			</li>
			<li>
				<Link className={scss.button} to="level-design" smooth onClick={handleClose}>
					<Button size="large" color="inherit">
						<Text raw>NAVBAR_LEVEL_DESIGN</Text>
					</Button>
				</Link>
			</li>
			<li>
				<Link className={scss.button} to="contact" smooth onClick={handleClose}>
					<Button size="large" color="inherit">
						<Text raw>NAVBAR_CONTACT</Text>
					</Button>
				</Link>
			</li>
		</>
	);
};

type NavBarLinksProps = {
	toggleDrawer: (state: boolean) => void
};

export default NavBarLinks;
