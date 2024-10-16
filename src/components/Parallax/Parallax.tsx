import { FC } from "react";
import { Parallax as IzParallax, ParallaxProps, useThemeMode } from "@izui/react";

import starsDark from "@izui/assets/images/background/stars-dark.svg";
import starsLight from "@izui/assets/images/background/stars-light.svg";

const Parallax: FC<ParallaxProps> = ({ image, ...rest }) => {
	const { parallaxImage } = useThemeMode({
		parallaxImage: [starsDark, starsLight]
	});
	return <IzParallax image={image || parallaxImage} {...rest} />;
};

export default Parallax;
