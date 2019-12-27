import React, { FunctionComponent } from 'react';
import { useTrail, animated } from 'react-spring';

export interface TrailProps
{
	height?: number,
	items: string[],
	active?: boolean,
	style?: React.CSSProperties,
	className?: string
}

const config = { mass: 5, tension: 2000, friction: 200 }
const TrailText: FunctionComponent<TrailProps> = (props: TrailProps): JSX.Element =>
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
			{trail.map(({ x, height, ...rest }, index) => 
			(
				<animated.div key={props.items![index]} 
					style={{ ...rest, transform: `translate3d(0,${x}px,0)` }}>
					<animated.div style={{ height: props.height }}>{props.items![index]}</animated.div>
				</animated.div>
			))}
		</div>
	);
}

export default TrailText;