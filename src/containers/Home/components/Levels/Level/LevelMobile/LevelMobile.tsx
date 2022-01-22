import { FC } from "react";
import ReactPlayer from "react-player";
import { Grid, Container, Typography, useTheme } from "@mui/material";
import classNames from "classnames";

import type { LevelSource } from "../Level";
import { playerConfig } from "../config";

import scss from "./LevelMobile.module.scss";

/**
 * Level back card with description and video.
 * @returns
 */
const LevelMobile: FC<Props> = ({ level, isFlipped }) =>
{
	const { theme } = useTheme();

	return (
		<Container component="section" className={classNames(scss.back, scss[theme])}>
			<Grid container className={scss.grid} justifyContent="center" alignItems="center">
				<header>
					<h3 itemProp="name" className={classNames(scss.name, "calli-h2")}>{level.name}</h3>
				</header>
				{isFlipped && <ReactPlayer config={playerConfig} width="100%" height="50%" url={level.videoUrl} />}
				<Typography itemProp="description" className={scss.typo} paragraph variant="subtitle1" align="left"
					color="textPrimary" component="p">
					{level.description}
				</Typography>
			</Grid>
		</Container>
	);
};

type Props = {
	level: LevelSource,
	isFlipped: boolean
};

export default LevelMobile;
