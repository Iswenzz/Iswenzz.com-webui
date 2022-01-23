import { memo, FC } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import type { BannerLayer, ParallaxBannerProps } from "react-scroll-parallax/dist/components/ParallaxBanner/types";

import { Spacing } from "components";
import useThemeMode from "utils/hooks/useThemeMode";

import stars from "assets/images/index/stars.svg";
import clouds from "assets/images/index/clouds.svg";

/**
 * Parallax background.
 */
const Parallax: FC<Props> = ({
	speed = -30, spacingTop, spacingBottom, image, blur = 0, children, style, ...rest
}) =>
{
	const { parallaxImage } = useThemeMode({
		parallaxImage: [stars, clouds]
	});

	const layers: BannerLayer[] = [{
		image: image || parallaxImage,
		speed
	}];

	return (
		<ParallaxBanner layers={layers} style={{ ...style, filter: `blur(${blur}px)` }} {...rest}>
			{spacingTop && <Spacing height={spacingTop} />}
			{children}
			{spacingBottom && <Spacing height={spacingBottom} />}
		</ParallaxBanner>
	);
};

type Props = ParallaxBannerProps & {
	spacingTop?: string,
	spacingBottom?: string,
	image?: string,
	speed?: number,
	blur?: number
};

export default memo(Parallax);
