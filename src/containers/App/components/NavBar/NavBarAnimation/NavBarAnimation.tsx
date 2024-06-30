import { FC } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

import { isNavbarActive } from "App/redux";

/**
 * Animate the navbar to appear differently when past the window inner height.
 * @returns
 */
const NavBarAnimation: FC<Props> = ({ isFixed, children }) => {
	const navbarVisible = useSelector(isNavbarActive);
	return (
		<nav>
			<AnimatePresence>{isFixed && navbarVisible && children}</AnimatePresence>
			<AnimatePresence>{!isFixed && navbarVisible && children}</AnimatePresence>
		</nav>
	);
};

type Props = {
	children: React.ReactNode;
	isFixed: boolean;
};

export default NavBarAnimation;
