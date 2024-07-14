import { FC, memo } from "react";
import { Grid, Fab, Tooltip, Typography, useTheme } from "@mui/material";
import { FaDiscord, FaYoutube, FaGithub } from "react-icons/fa";
import { Parallax } from "@izui/react";
import classNames from "classnames";

import scss from "./Footer.module.scss";

/**
 * Footer with links to social medias & copyrights.
 */
const Footer: FC = () => {
	const { theme } = useTheme();
	return (
		<>
			<Grid container component="footer">
				<Grid
					container
					className={classNames(scss.footer, scss[theme])}
					component="ul"
					justifyContent="center"
					alignItems="center"
				>
					<li>
						<Fab
							href="https://github.com/iswenzz"
							className={scss.icons}
							color="primary"
						>
							<FaGithub size={24} color="silver" />
						</Fab>
					</li>
					<li>
						<Fab
							href="https://www.youtube.com/c/iswenzz"
							className={scss.icons}
							color="primary"
						>
							<FaYoutube size={24} color="#FF0000" />
						</Fab>
					</li>
					<li>
						<Tooltip disableFocusListener disableTouchListener title="Iswenzz">
							<Fab color="primary" className={scss.icons}>
								<FaDiscord size={24} color="#7289DA" />
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
