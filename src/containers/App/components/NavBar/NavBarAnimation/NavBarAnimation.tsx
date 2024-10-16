import { FC } from "react";
import { useSelector } from "react-redux";
import { AnimatePresence } from "framer-motion";

import { isNavbarActive, isPastWindowHeight } from "App/redux";

/**
 * Animate the navbar to appear differently when past the window inner height.
 * @returns
 */
const NavBarAnimation: FC<Props> = ({ children }) => {
	const navbarVisible = useSelector(isNavbarActive);
	const pastWindowHeight = useSelector(isPastWindowHeight);

	return (
		<nav>
			<AnimatePresence>{!pastWindowHeight && navbarVisible && children}</AnimatePresence>
			<AnimatePresence>{pastWindowHeight && navbarVisible && children}</AnimatePresence>
		</nav>
	);
};

type Props = {
	children: React.ReactNode;
};

export default NavBarAnimation;
