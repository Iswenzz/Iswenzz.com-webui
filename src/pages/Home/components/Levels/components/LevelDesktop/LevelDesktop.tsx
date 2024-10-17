import { FC } from "react";
import ReactPlayer from "react-player";
import { Grid, Container, Typography } from "@mui/material";

import { LevelSource } from "../Level/Level";
import { playerConfig } from "../config";

import scss from "./LevelDesktop.module.scss";

/**
 * Level back card with description and video.
 * @returns
 */
const LevelDesktop: FC<Props> = ({ level, isFlipped }) => (
	<Container component="section" className={scss.back}>
		<Grid container>
			<Grid item component="header" className={scss.tileName} xs={12}>
				<Typography
					itemProp="name"
					className={scss.typo}
					variant="h2"
					align="center"
					color="textPrimary"
					component="h2"
				>
					{level.name}
				</Typography>
			</Grid>
			<Grid item className={scss.tilePlayer} xs={8}>
				{isFlipped && (
					<ReactPlayer
						config={playerConfig}
						width="100%"
						height="100%"
						url={level.videoUrl}
					/>
				)}
			</Grid>
			<Grid item className={scss.tileDescription} xs={4}>
				<Grid container justifyContent="center" alignItems="center">
					<Typography
						itemProp="description"
						className={scss.tileDescriptionTypo}
						variant="subtitle1"
						align="left"
						color="textPrimary"
						paragraph
					>
						{level.description}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	</Container>
);

type Props = {
	level: LevelSource;
	isFlipped: boolean;
};

export default LevelDesktop;
