import { Variants } from "framer-motion";

/**
 * Fade animation.
 * @param duration - Fade duration.
 * @returns
 */
export const animationFade = (duration = 500): Variants => ({
	enter: {
		opacity: 1,
		transition: {
			duration: duration
		}
	},
	exit: {
		opacity: 0,
		transition: {
			duration: duration
		}
	}
});

/**
 * Trail animation.
 * @param delay - Trail delay.
 * @returns
 */
export const animationTrail = (delay = 0.05): Variants => ({
	enter: (index: number) => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: index * delay
		}
	}),
	exit: {
		y: "100%",
		opacity: 0
	}
});

/**
 * Scale and fade animation to original position up.
 * @param scaleStart - The start scale.
 * @returns
 */
export const animationScaleFadeUp = (scaleStart = 0.4): Variants => ({
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
		scale: scaleStart,
		transition: {
			duration: 1,
			ease: "easeIn"
		}
	}
});

/**
 * Scale and fade animation to original position down.
 * @param scaleStart - The start scale.
 * @returns
 */
export const animationScaleFadeDown = (scaleStart = 0.4): Variants => ({
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
		y: "-100%",
		opacity: 0,
		scale: scaleStart,
		transition: {
			duration: 1,
			ease: "easeIn"
		}
	}
});

/**
 * Move from offscreen to original position up.
 */
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

/**
 * Move from offscreen to original position down.
 */
export const animationDown: Variants = {
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
		y: "-100%",
		opacity: 0,
		scale: 1,
		transition: {
			duration: 1,
			ease: "easeIn"
		}
	}
};

/**
 * Move from offscreen to original position on the right.
 */
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

/**
 * Move from offscreen to original position on the left.
 */
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
