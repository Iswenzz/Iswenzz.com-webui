import { FC } from "react";
import { Grid, Tooltip, Container } from "@mui/material";
import { HintClick, Image, Forward, preventDefault, useResponsive } from "@izui/react";
import { v4 as uuidv4 } from "uuid";

import { LevelSource } from "../Level/Level";
import scss from "./LevelRender.module.scss";

/**
 * Level render image and stacks.
 * @returns
 */
const LevelRender: FC<Props> = ({ level }) => {
	const iconSize = useResponsive({
		desktop: "64",
		mobile: "32"
	});

	return (
		<Container
			itemScope
			itemType="http://schema.org/3DModel"
			component="section"
			className={scss.front}
			style={{ backgroundImage: `url(${level.image})` }}
		>
			<meta itemProp="image" content={level.image} />
			<meta itemProp="embedUrl" content={level.videoUrl} />
			<Grid container alignItems="center" justifyContent="space-between">
				<HintClick />
				<Grid
					container
					component="ul"
					direction="column"
					justifyContent="space-evenly"
					alignItems="flex-end"
				>
					{level.renderIcons?.map(icon => (
						<li key={uuidv4()}>
							<Tooltip
								placement="left"
								arrow
								disableFocusListener
								disableTouchListener
								title={icon.name}
							>
								<Forward>
									<Image
										onDragStart={preventDefault}
										className={scss.tooltipImg}
										width={iconSize}
										height={iconSize}
										src={icon.src}
									/>
								</Forward>
							</Tooltip>
						</li>
					))}
				</Grid>
			</Grid>
		</Container>
	);
};

type Props = {
	level: LevelSource;
};

export default LevelRender;
