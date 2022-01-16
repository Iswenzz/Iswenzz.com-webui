import { Variants } from "framer-motion";

export const animation: Variants = {
	enter: (index: number) => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: index * 0.05
		}
	}),
	initial: {
		y: "100%",
		opacity: 0
	}
};
