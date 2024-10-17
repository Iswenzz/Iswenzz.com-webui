import { FC } from "react";
import ReactPlayer from "react-player";
import { Grid, Container, Typography } from "@mui/material";
import classNames from "classnames";

import { LevelSource } from "../Level/Level";
import { playerConfig } from "../config";

import scss from "./LevelMobile.module.scss";

/**
 * Level back card with description and video.
 * @returns
 */
const LevelMobile: FC<Props> = ({ level, isFlipped }) => (
	<Container component="section" className={scss.back}>
		<Grid container className={scss.grid} justifyContent="center" alignItems="center">
			<header>
				<h3 itemProp="name" className={classNames(scss.name, "calli-h2")}>
					{level.name}
				</h3>
			</header>
			{isFlipped && (
				<ReactPlayer config={playerConfig} width="100%" height="50%" url={level.videoUrl} />
			)}
			<Typography
				itemProp="description"
				className={scss.typo}
				paragraph
				variant="subtitle2"
				align="left"
				color="textPrimary"
			>
				{level.description}
			</Typography>
		</Grid>
	</Container>
);

type Props = {
	level: LevelSource;
	isFlipped: boolean;
};

export default LevelMobile;
