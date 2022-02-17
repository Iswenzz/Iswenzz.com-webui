import { FC, memo, useState } from "react";
import { Flip, useResponsive } from "@izui/react";

import LevelDesktop from "./LevelDesktop/LevelDesktop";
import LevelMobile from "./LevelMobile/LevelMobile";
import LevelRender from "./LevelRender/LevelRender";

/**
 * Flip card with the map preview and stacks on the front and video/description on the back.
 */
const Level: FC<Props> = ({ level }) =>
{
	const [isFlipped, setFlipped] = useState<boolean>(false);

	const LevelBackCard = useResponsive({
		desktop: LevelDesktop,
		mobile: LevelMobile
	});

	/**
	 * Flip the card.
	 * @param flipState - Flip card state.
	 */
	const flipCallback = (flipState: boolean) => setFlipped(flipState);

	return (
		<Flip flipCallback={flipCallback}
			front={<LevelRender level={level} />}
			back={<LevelBackCard level={level} isFlipped={isFlipped} />}
		/>
	);
};

export type LevelSource = {
	name: string,
	image: string,
	description?: string,
	videoUrl?: string,
	width?: string,
	height?: string,
	renderIcons?: Icon[]
};

type Props = {
	level: LevelSource
};

export default memo(Level);
