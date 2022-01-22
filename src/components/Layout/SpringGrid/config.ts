import { easings } from "react-spring";

const config = {
	columns: {
		xs: 2,
		sm: 3,
		md: 4,
		lg: 6
	},
	gutter: {
		width: 30,
		height: 0
	},
	itemSize: {
		width: 200,
		height: 200
	},
	spring: {
		stiffness: 120,
		damping: 12,
		precision: 0.1,
		friction: 19,
		easing: easings.easeInOutCubic
	}
};

export default config;
