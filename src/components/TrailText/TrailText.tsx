import React, { FunctionComponent, memo } from 'react';
import { useTrail, animated } from 'react-spring';
import { Typography, TypographyProps } from '@material-ui/core';

export interface TrailProps extends TypographyProps
{
	height?: number,
	items: string[],
	active?: boolean,
	style?: React.CSSProperties,
	className?: string
}

const config = { mass: 5, tension: 2000, friction: 200 }
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
		<div className={props.className} style={props.style}>
			{trail.map(({ x, height, ...rest }, index) => (
				<animated.div key={Math.random()}  
					style={{ ...rest, transform: `translate3d(0,${x}px,0)` }}>
					<animated.div style={{ height: props.height }}>
						<Typography align={props.align} color={props.color} paragraph={props.paragraph} 
						component={props.component}>
							{props.items[index]} 
						</Typography>
					</animated.div>
				</animated.div>
			))}
		</div>
	);
}

export default memo(TrailText);