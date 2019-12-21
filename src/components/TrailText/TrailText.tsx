import React, { useState, FunctionComponent } from 'react'
import { useTrail, animated } from 'react-spring'

interface ITrailText
{
	height?: number,
	items: string[],
	active?: boolean
}

const config = { mass: 5, tension: 2000, friction: 200 }
const TrailText: FunctionComponent<ITrailText> = (props: ITrailText): JSX.Element =>
{
	const [toggle] = useState(props.active !== undefined ? props.active : false);
	const trail = useTrail(props.items.length, {
		config,
		opacity: toggle ? 1 : 0,
		x: toggle ? 0 : 20,
		height: toggle ? 80 : 0,
		from: { opacity: 0, x: 20, height: 0 },
	});

  	return (
		<div>
			{trail.map(({ x, height, ...rest }, index) => (
				<animated.div key={props.items[index]} 
					style={{ ...rest, transform: `translate3d(0,${x}px,0)` }}>
					<animated.div style={{ height: props.height }}>{props.items[index]}</animated.div>
				</animated.div>
			))}
		</div>
	);
}

export default TrailText;