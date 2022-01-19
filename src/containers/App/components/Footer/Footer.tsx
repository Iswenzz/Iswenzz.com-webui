import { FC, memo } from "react";
import { Parallax } from "react-parallax";
import { Grid, Fab, Tooltip, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord, faYoutube, faGithub } from "@fortawesome/free-brands-svg-icons";

import { Spacing } from "components";
import useThemeMode from "utils/hooks/useThemeMode";
import stars from "assets/images/index/stars.svg";
import clouds from "assets/images/index/clouds.svg";

import scss from "./Footer.module.scss";
import classNames from "classnames";

/**
 * Footer with links to social medias & copyrights.
 */
const Footer: FC = () =>
{
	const { parallaxImage, theme } = useThemeMode({ 
		parallaxImage: [stars, clouds]
	});

	return (
		<>
			<Grid container component="footer">
				<Grid container className={classNames(scss.footer, scss[theme])} 
					component="ul" justifyContent="center" alignItems="center">
					<li>
						<Fab href="https://github.com/iswenzz" className={scss.icons} color="primary">
							<FontAwesomeIcon color="silver" icon={faGithub} size="2x" />
						</Fab>
					</li>
					<li>
						<Fab href="https://www.youtube.com/c/iswenzz" className={scss.icons} color="primary">
							<FontAwesomeIcon color="#FF0000" icon={faYoutube} size="2x" />
						</Fab>
					</li>
					<li>
						<Tooltip disableFocusListener disableTouchListener title="Iswenzz#3906">
							<Fab color="primary" className={scss.icons}>
								<FontAwesomeIcon color="#7289da" icon={faDiscord} size="2x" />
							</Fab>
						</Tooltip>
					</li>
				</Grid>
			</Grid>
			<Parallax className={scss.parallax} bgImageAlt="footer" strength={-400} bgImage={parallaxImage}>
				<Spacing height="10px" />
				<Typography align="center" color="textPrimary" variant="subtitle2" component="h3">
				Copyright © Iswenzz 2017-2022
				</Typography>
				<Spacing height="190px" />
			</Parallax>
		</>
	);
};

export default memo(Footer);
