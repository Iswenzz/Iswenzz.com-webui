import React, { useState, FunctionComponent } from 'react';
import { useSpring, animated } from 'react-spring';
import './FlipCard.scss';

export interface FlipCardProps
{
	className?: string,
	style?: React.CSSProperties,
	back?: React.ReactNode,
	front?: React.ReactNode,
}

const FlipCard: FunctionComponent<FlipCardProps> = (props: FlipCardProps): JSX.Element =>
{
	const [flipped, set] = useState(false);
	const { transform, opacity } = useSpring({
		opacity: flipped ? 1 : 0,
		transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
		config: { mass: 5, tension: 500, friction: 80 }
	});

	return (
		<div className={props.className} style={props.style} onClick={() => set(state => !state)}>
			<animated.div className="c" style={{ opacity: opacity.interpolate(o => 1 - o), transform }}>
				{props.back}
			</animated.div>
			<animated.div className="c" style={{ opacity, transform: transform.interpolate(t => `${t} rotateX(180deg)`) }}>
				{props.front}
			</animated.div>
		</div>
	);
}

export default FlipCard;