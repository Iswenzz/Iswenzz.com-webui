import { Variants } from "framer-motion";

export const animation: Variants = {
	enter: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.5,
			ease: "easeOut"
		}
	},
	exit: {
		opacity: 0,
		scale: 1.5,
		transition: {
			duration: 0.5,
			ease: "easeIn"
		}
	}
};
