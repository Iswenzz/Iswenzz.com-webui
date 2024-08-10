import { FC, useState } from "react";
import { Flip, useResponsive } from "@izui/react";

import LevelDesktop from "../LevelDesktop/LevelDesktop";
import LevelMobile from "../LevelMobile/LevelMobile";
import LevelRender from "../LevelRender/LevelRender";

/**
 * Flip card with the map preview and stacks on the front and video/description on the back.
 */
const Level: FC<Props> = ({ level }) => {
	const [isFlipped, setFlipped] = useState(false);

	const LevelInfo = useResponsive({
		desktop: LevelDesktop,
		mobile: LevelMobile
	});

	const flipCallback = (flipState: boolean) => setFlipped(flipState);

	return (
		<Flip
			flipCallback={flipCallback}
			front={<LevelRender level={level} />}
			back={<LevelInfo level={level} isFlipped={isFlipped} />}
		/>
	);
};

export type LevelSource = {
	name: string;
	image: string;
	description?: string;
	videoUrl?: string;
	width?: string;
	height?: string;
	renderIcons?: Icon[];
};

type Props = {
	level: LevelSource;
};

export default Level;
