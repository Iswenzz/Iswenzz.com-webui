import classNames from "classnames";
import { FC, useState } from "react";
import ReactCardFlip from "react-card-flip";

import style from "./FlipCard.module.scss";

/**
 * Card component that flips on mouse click.
 */
const FlipCard: FC<FlipCardProps> = ({ flipped, flipCallback, back, front, direction }) =>
{
	const [isFlipped, setIsFlipped] = useState<boolean>(flipped || false);
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
			isFlipped={isFlipped} flipDirection={direction || "vertical"}>
			<section className={style.flipcard} onClick={handleClick}>
				{back}
			</section>
			<section className={style.flipcard} onClick={handleClick}>
				{front}
			</section>
		</ReactCardFlip>
	);
};

export type FlipCardProps = {
	style?: React.CSSProperties,
	back?: React.ReactNode,
	front?: React.ReactNode,
	flipped?: boolean,
	direction?: "vertical" | "horizontal",
	flipCallback?: (flipState: boolean) => void
};

export default FlipCard;
