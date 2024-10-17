import { FC } from "react";
import { Grid, Fab, Tooltip, Typography } from "@mui/material";
import { FaDiscord, FaYoutube, FaGithub } from "react-icons/fa";

import { Parallax } from "components";

import scss from "./Footer.module.scss";

/**
 * Footer with links to social medias & copyrights.
 */
const Footer: FC = () => (
	<Grid container id="footer" component="footer">
		<Grid
			container
			className={scss.footer}
			component="ul"
			justifyContent="center"
			alignItems="center"
		>
			<li>
				<Fab href="https://github.com/iswenzz" className={scss.icons}>
					<FaGithub size={24} color="dimgray" />
				</Fab>
			</li>
			<li>
				<Fab href="https://www.youtube.com/c/iswenzz" className={scss.icons}>
					<FaYoutube size={24} color="#FF0000" />
				</Fab>
			</li>
			<li>
				<Tooltip disableFocusListener disableTouchListener title="Iswenzz">
					<Fab className={scss.icons}>
						<FaDiscord size={24} color="#7289DA" />
					</Fab>
				</Tooltip>
			</li>
		</Grid>
		<Parallax className={scss.parallax} speed={20}>
			<Typography align="center" color="textPrimary" variant="subtitle2" component="h3">
				Copyright © Iswenzz 2017-2024
			</Typography>
		</Parallax>
	</Grid>
);

export default Footer;
