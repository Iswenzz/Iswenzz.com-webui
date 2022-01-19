import { FC } from "react";
import { AnimatePresence } from "framer-motion";

/**
 * Animate the navbar to appear differently when past the window inner height.
 * @returns 
 */
const NavBarAnimation: FC<NavBarAnimationProps> = ({ isFixed, children }) => (
	<nav>
		<AnimatePresence>
			{isFixed && children}
		</AnimatePresence>
		<AnimatePresence>
			{!isFixed && children}
		</AnimatePresence>
	</nav>
);

type NavBarAnimationProps = {
	isFixed: boolean
};

export default NavBarAnimation;
