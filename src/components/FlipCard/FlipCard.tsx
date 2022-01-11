import { FC, useState } from "react";
import ReactCardFlip from "react-card-flip";
import "./FlipCard.scss";

/**
 * Card component that flips on mouse click event.
 */
const FlipCard: FC<FlipCardProps> = (props) =>
{
	const [isFlipped, setIsFlipped] = useState<boolean>(props.flipped || false);

	/**
	 * FlipCard click callback.
	 * @param e - Click event args.
	 */
	const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void =>
	{
		e.preventDefault();
		setIsFlipped(!isFlipped);

		if (props.flipCallback)
			props.flipCallback(isFlipped);
	};

	return (
		<ReactCardFlip containerClassName={isFlipped ? "back" : "front"} containerStyle={{ width: "100%", height: "100%" }}
			isFlipped={isFlipped} flipDirection="vertical">
			<section className="flipcard" onClick={handleClick}>
				{props.back}
			</section>
			<section className="flipcard" onClick={handleClick}>
				{props.front}
			</section>
		</ReactCardFlip>
	);
};

export type FlipCardProps = {
	className?: string,
	style?: React.CSSProperties,
	back?: React.ReactNode,
	front?: React.ReactNode,
	flipped?: boolean,
	flipCallback?: (flipState: boolean) => void,
};

export default FlipCard;
