import { FC, memo, ElementType } from "react";
import { useTrail, animated } from "react-spring";
import {useTranslation} from "react-i18next";
import { v4 as uuidv4 } from "uuid";

import { Typography, TypographyProps } from "@mui/material";

import { trailAnimation } from "./config";

/**
 * Typography wrapper for multiple strings with react-spring trail animation.
 */
const TrailText: FC<TrailProps> = ({ items, i18n, active, component = "h6", ...rest }) =>
{
	const { t } = useTranslation();
	const text = i18n ? items.map(i => t(i)) : items;

	const trail = useTrail(text.length, {
		config: trailAnimation,
		opacity: active ? 1 : 0,
		x: active ? 0 : 20,
		height: active ? 80 : 0,
		from: { opacity: 0, x: 20, height: 0 },
	});

  	return (
		<>
			{trail.map(({ x, height, ...style }, index) => (
				<animated.div key={uuidv4()}  
					style={{ ...style, transform: `translate3d(0, ${x}px, 0)` }}>
					<animated.div>
						<Typography component={component} {...rest }>
							{text[index]}
						</Typography>
					</animated.div>
				</animated.div>
			))}
		</>
	);
};

type TrailProps = TypographyProps & {
	height?: number,
	items: string[],
	active: boolean,
	className?: string,
	component?: ElementType,
	i18n?: boolean
};

export default memo(TrailText);
