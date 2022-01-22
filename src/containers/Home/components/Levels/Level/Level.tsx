import { FC, memo, useState } from "react";
import { Grid, Tooltip, Container, Typography, ImageList, ImageListItem, useTheme } from "@mui/material";
import {Flip, HintClick} from "components";
import ReactPlayer, { Config } from "react-player";
import usePortrait from "utils/hooks/usePortrait";
import useTabletOrMobile from "utils/hooks/useTabletOrMobile";
import { v4 as uuidv4 } from "uuid";
import {useTranslation} from "react-i18next";
import { Image, Forward } from "components";

import classNames from "classnames";
import { preventDefault } from "utils/events";
import { ProjectIcon } from "Home/components/Projects/Project/Project";

import scss from "./Level.module.scss";

const playerConfig: Config = {
	youtube: {
		playerVars: {
			disablekb: false,
			controls: true
		}
	}
};

export type LevelProps = {
	currentLevel: LevelProject,
	levels: LevelProject[]
};

export type LevelProject = {
	name: string,
	image: string,
	description?: string,
	videoUrl?: string,
	width?: string,
	height?: string,
	renderIcons?: ProjectIcon[]
};

/**
 * Flip card container, map preview and stacks on the front, and video/description on the back.
 * @param props - LevelProps
 */
export const Level: FC<LevelProps> = (props: LevelProps): JSX.Element =>
{
	const { t } = useTranslation();
	const isPortrait = usePortrait();
	const isTabletOrMobile = useTabletOrMobile();
	const [isFlipped, setFlipped] = useState<boolean>(false);
	const { theme } = useTheme();

	/**
	 * Flip the card.
	 * @param flipState - Flip card state.
	 */
	const flipCallback = (flipState: boolean): void =>
	{
		setFlipped(flipState);
	};

	/**
	 * Component for the desktop version.
	 */
	const desktopCard: JSX.Element = (
		<Container component="section" className={classNames(scss.back, scss[theme])}>
			<ImageList className={scss.gridList} rowHeight="auto" gap={1}>
				<ImageListItem component="header" className="level-desktop-tile-name" key={uuidv4()} cols={2} rows={2}>
					<Typography itemProp="name" className="level-desktop-typo" variant="h2" align="center"
						color="textPrimary" component="h2">
						{props.currentLevel.name}
					</Typography>
				</ImageListItem>
				<ImageListItem key={uuidv4()} cols={1} rows={1} className="level-desktop-tile-player">
					{isFlipped ? <ReactPlayer config={playerConfig} width="100%" height="100%"
						url={props.currentLevel.videoUrl} /> : null}
				</ImageListItem>
				<ImageListItem key={uuidv4()} cols={1} rows={1} className="level-desktop-tile-desc">
					<Grid container justifyContent="center" alignItems="center">
						<Typography itemProp="description" className="level-desktop-tile-desc-typo" variant="subtitle1"
							align="left" color="textPrimary" paragraph component="p">
							{props.currentLevel.description}
						</Typography>
					</Grid>
				</ImageListItem>
			</ImageList>
		</Container>
	);

	/**
	 * Component for the mobile version.
	 */
	const mobileCard: JSX.Element = (
		<Container component="section" className={classNames(scss.back, scss[theme])}>
			<Grid container className={scss.grid} justifyContent="center" alignItems="center">
				<header>
					<h3 itemProp="name" className="calli-h2 level-mobile-name">{props.currentLevel.name}</h3>
				</header>
				{isFlipped ? <ReactPlayer config={playerConfig} width="100%" height="50%"
					url={props.currentLevel.videoUrl} /> : null}
				<Typography itemProp="description" className="level-mobile-typo" paragraph variant="subtitle1" align="left"
					color="textPrimary" component="p">
					{props.currentLevel.description}
				</Typography>
			</Grid>
		</Container>
	);

	return (
		<Flip flipCallback={flipCallback} front={(
			<Container itemScope itemType="http://schema.org/3DModel" component="section"
				className={classNames(scss.front, scss[theme])}
				style={{ backgroundImage: `url(${props.currentLevel.image})` }}>
				<meta itemProp="image" content={props.currentLevel.image} />
				<meta itemProp="embedUrl" content={props.currentLevel.videoUrl} />
				<Grid container alignItems="center" justifyContent="space-between">
					<HintClick />
					<Grid container component="ul" direction="column" justifyContent="space-evenly" alignItems="flex-end">
						{props.currentLevel.renderIcons?.map(icon => (
							<li key={uuidv4()}>
								<Tooltip placement="left" arrow disableFocusListener disableTouchListener title={icon.name}>
									<Forward>
										<Image onDragStart={preventDefault} className={scss.tooltipImg}
											width={isPortrait || isTabletOrMobile ? "32" : "64"}
											height={isPortrait || isTabletOrMobile ? "32" : "64"}
											alt="" src={icon.src} />
									</Forward>
								</Tooltip>
							</li>
						))}
					</Grid>
				</Grid>
			</Container>
		)} back={isPortrait || isTabletOrMobile ? mobileCard : desktopCard} />
	);
};

export default memo(Level);
