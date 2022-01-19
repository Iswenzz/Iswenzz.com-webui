import { Variants } from "framer-motion";

export const animationUp: Variants = {
	enter: { 
		y: "0%", 
		opacity: 1,
		scale: 1,
		transition: { 
			duration: 1,
			ease: "easeOut"
		}
	},
	exit: {
		y: "100%",
		opacity: 0,
		scale: 1,
		transition: { 
			duration: 1,
			ease: "easeIn"
		}
	}
};

export const animationRight: Variants = {
	enter: { 
		x: "0%", 
		opacity: 1,
		scale: 1,
		transition: { 
			duration: 1,
			ease: "easeOut"
		}
	},
	exit: {
		x: "100%",
		opacity: 0,
		scale: 1,
		transition: { 
			duration: 1,
			ease: "easeIn"
		}
	}
};

export const animationLeft: Variants = {
	enter: { 
		x: "0%", 
		opacity: 1,
		scale: 1,
		transition: { 
			duration: 1,
			ease: "easeOut"
		}
	},
	exit: {
		x: "-100%",
		opacity: 0,
		scale: 1,
		transition: { 
			duration: 1,
			ease: "easeIn"
		}
	}
};
