import { FC, memo, ElementType } from "react";
import { useTrail, animated, SpringConfig } from "react-spring";
import { Typography, TypographyProps } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";
import {useTranslation} from "react-i18next";

export type TrailProps = TypographyProps & {
	height?: number,
	items: string[],
	active: boolean,
	className?: string,
	component?: ElementType,
	i18n?: boolean
};

const config: SpringConfig = {
	mass: 5, 
	tension: 2000, 
	friction: 200 
};

/**
 * Typography wrapper for multiple strings with react-spring trail animation.
 * @param props - TrailProps
 */
export const TrailText: FC<TrailProps> = (props: TrailProps): JSX.Element =>
{
	const { t } = useTranslation();
	const text: string[] = props.i18n ? props.items.map(i => t(i)) : props.items;

	const trail = useTrail(text.length, {
		config,
		opacity: props.active ? 1 : 0,
		x: props.active ? 0 : 20,
		height: props.active ? 80 : 0,
		from: { opacity: 0, x: 20, height: 0 },
	});

  	return (
		<>
			{trail.map(({ x, height, ...rest }, index) => (
				<animated.div key={uuidv4()}  
					style={{ ...rest, transform: `translate3d(0,${x}px,0)` }}>
					<animated.div>
						<Typography style={props.style} className={props.className} noWrap={props.noWrap} 
							align={props.align} color={props.color} paragraph={props.paragraph} 
							component={props.component ?? "h6"} variant={props.variant}>
							{text[index]}
						</Typography>
					</animated.div>
				</animated.div>
			))}
		</>
	);
};

export default memo(TrailText);
