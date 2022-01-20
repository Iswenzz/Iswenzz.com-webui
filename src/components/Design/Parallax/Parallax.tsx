import { memo, FC } from "react";
import { Parallax as ReactParallax, ParallaxProps } from "react-parallax";

import { Spacing } from "components";
import useThemeMode from "utils/hooks/useThemeMode";

import stars from "assets/images/index/stars.svg";
import clouds from "assets/images/index/clouds.svg";

/**
 * Parallax background.
 */
const Parallax: FC<Props> = ({ strength = 400, spacingTop, spacingBottom, bgImage, children, ...rest }) =>
{
	const { parallaxImage } = useThemeMode({
		parallaxImage: [stars, clouds]
	});

	return (
		<ReactParallax {...rest} bgImageAlt="parallax" strength={strength} bgImage={bgImage || parallaxImage}>
			{spacingTop && <Spacing height={spacingTop} />}
			{children}
			{spacingBottom && <Spacing height={spacingBottom} />}
		</ReactParallax>
	);
};

type Props = ParallaxProps & {
	spacingTop?: string
	spacingBottom?: string
};

export default memo(Parallax);
