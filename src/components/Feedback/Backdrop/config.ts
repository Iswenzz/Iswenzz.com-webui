import { Variants } from "framer-motion";

export const animation: Variants = {
	enter: {
		opacity: 1,
		transition: {
			duration: 5000
		}
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 5000
		}
	}
};
