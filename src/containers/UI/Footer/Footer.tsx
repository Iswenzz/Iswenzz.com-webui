import React, { FunctionComponent, memo } from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import RadialGradient from 'components/RadialGradient/RadialGradient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Parallax } from 'react-parallax';
import Spacing from 'components/Spacing/Spacing';
import { Tooltip, Typography } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { AppState } from 'application';
import 'Common.scss';

/**
 * Footer container with links to social medias & copyrights.
 */
const Footer: FunctionComponent = (): JSX.Element =>
{
	const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);

	return (
		<>
			<RadialGradient component="footer" position='ellipse at bottom' colors={[
			{ color: isDarkMode ? '#23272A' : '#f2f2f2', colorPercent: '0%' },
			{ color: isDarkMode ? '#23272F' : '#f4f4f4', colorPercent: '100%' }
			]}>
				<Grid component="ul" container direction="row" justify="center" alignItems="center">
					<li>
						<Fab href='https://github.com/iswenzz' color="primary" style={{ margin: 20 }}>
							<FontAwesomeIcon color='silver' icon={faGithub} size='2x' />
						</Fab>
					</li>
					<li>
						<Fab href='https://www.youtube.com/c/iswenzz' color="primary" style={{ margin: 20 }}>
							<FontAwesomeIcon color='#FF0000' icon={faYoutube} size='2x' />
						</Fab>
					</li>
					<li>
						<Tooltip disableFocusListener disableTouchListener title="Iswenzz#3906">
							<Fab color="primary" style={{ margin: 20 }}>
								<FontAwesomeIcon color='#7289da' icon={faDiscord} size='2x' />
							</Fab>
						</Tooltip>
					</li>
				</Grid>
			</RadialGradient>
			<Parallax style={{backgroundColor: 'black'}} bgImageAlt="index" strength={-400}
			bgImage={require(`assets/images/index/${isDarkMode ? 'stars' : 'clouds'}.svg`)}>
				<Spacing height='10px' />
				<Typography align="center" color="textPrimary" variant="subtitle2" component="h3">
					Copyright © Iswenzz 2017-2020
				</Typography>
				<Spacing height='190px' />
			</Parallax>
		</>
	);
}

export default memo(Footer);