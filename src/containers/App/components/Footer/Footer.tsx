import { FC, memo } from "react";
import { Grid, Fab, Tooltip, Typography, useTheme } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons/faDiscord";
import { faYoutube } from "@fortawesome/free-brands-svg-icons/faYoutube";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { Parallax } from "@izui/react";
import classNames from "classnames";

import scss from "./Footer.module.scss";

/**
 * Footer with links to social medias & copyrights.
 */
const Footer: FC = () =>
{
	const { theme } = useTheme();

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
			<Parallax className={scss.parallax} speed={20}>
				<Typography align="center" color="textPrimary" variant="subtitle2" component="h3">
					Copyright © Iswenzz 2017-2022
				</Typography>
			</Parallax>
		</>
	);
};

export default memo(Footer);
