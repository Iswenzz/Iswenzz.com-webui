import React, { FunctionComponent, memo } from 'react';
import { useTrail, animated, SpringConfig } from 'react-spring';
import { Typography, TypographyProps } from '@material-ui/core';
import uuid from 'uuid';

export interface TrailProps extends TypographyProps
{
	height?: number,
	items: string[],
	active: boolean,
	className?: string
}

const config: SpringConfig = {
	mass: 5, 
	tension: 2000, 
	friction: 200 
};

/**
 * Typography wrapper for multiple strings with react-spring trail animation.
 * @param props - TrailProps
 */
export const TrailText: FunctionComponent<TrailProps> = (props: TrailProps): JSX.Element =>
{
	const trail = useTrail(props.items.length, {
		config,
		opacity: props.active ? 1 : 0,
		x: props.active ? 0 : 20,
		height: props.active ? 80 : 0,
		from: { opacity: 0, x: 20, height: 0 },
	});

  	return (
		<>
		{trail.map(({ x, height, ...rest }, index) => (
			<animated.div key={uuid.v4()}  
				style={{ ...rest, transform: `translate3d(0,${x}px,0)` }}>
				<animated.div>
					<Typography style={props.style} className={props.className} noWrap={props.noWrap} 
					align={props.align} color={props.color} paragraph={props.paragraph} 
					component={props.component} variant={props.variant}>
						{props.items[index]} 
					</Typography>
				</animated.div>
			</animated.div>
		))}
		</>
	);
}

export default memo(TrailText);