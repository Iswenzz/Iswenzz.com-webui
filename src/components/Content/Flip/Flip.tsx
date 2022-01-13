import { FC, useState } from "react";
import ReactCardFlip from "react-card-flip";
import classNames from "classnames";

import style from "./Flip.module.scss";

/**
 * Card component that flips on mouse click.
 */
const Flip: FC<FlipProps> = ({ flipped = false, flipCallback, back, front, direction = "vertical" }) =>
{
	const [isFlipped, setIsFlipped] = useState<boolean>(flipped);
	const containerStyles = classNames(style.container, { back: isFlipped, front: !isFlipped });

	/**
	 * FlipCard click callback.
	 * @param e - Click event args.
	 */
	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void =>
	{
		e.preventDefault();
		setIsFlipped(!isFlipped);

		if (flipCallback)
			flipCallback(isFlipped);
	};

	return (
		<ReactCardFlip containerClassName={containerStyles} 
			isFlipped={isFlipped} flipDirection={direction}>
			<section className={style.flip} onClick={handleClick}>
				{back}
			</section>
			<section className={style.flip} onClick={handleClick}>
				{front}
			</section>
		</ReactCardFlip>
	);
};

export type FlipProps = {
	style?: React.CSSProperties,
	back?: React.ReactNode,
	front?: React.ReactNode,
	flipped?: boolean,
	direction?: "vertical" | "horizontal",
	flipCallback?: (flipState: boolean) => void
};

export default Flip;
