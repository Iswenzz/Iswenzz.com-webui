import React, { FunctionComponent } from 'react';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import RadialGradient from '../../../components/RadialGradient/RadialGradient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Parallax } from 'react-parallax';
import Spacing from '../../../components/Spacing/Spacing';
import { Tooltip } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { AppState } from '../../..';

const Footer: FunctionComponent = (): JSX.Element =>
{
    const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);

    return (
        <div>
            <RadialGradient position='ellipse at bottom' colors={[
            { color: isDarkMode ? '#23272A' : '#f2f2f2', colorPercent: '0%' },
            { color: isDarkMode ? '#23272F' : '#f4f4f4', colorPercent: '100%' }
            ]}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Fab href='https://github.com/iswenzz' color="primary" style={{ margin: 20 }} aria-label="add">
                        <FontAwesomeIcon color='silver' icon={faGithub} size='2x' />
                    </Fab>
                    <Fab href='https://www.youtube.com/c/iswenzz' color="primary" style={{ margin: 20 }} aria-label="add">
                        <FontAwesomeIcon color='#FF0000' icon={faYoutube} size='2x' />
                    </Fab>
                    <Tooltip disableFocusListener disableTouchListener title="Iswenzz#3906">
                        <Fab color="primary" style={{ margin: 20 }} aria-label="add">
                            <FontAwesomeIcon color='#7289da' icon={faDiscord} size='2x' />
                        </Fab>
                    </Tooltip>
                </Grid>
            </RadialGradient>
            <Parallax style={{backgroundColor: 'black'}} bgImageAlt="index" strength={-400}
            bgImage={require(`../../../assets/images/index/${isDarkMode ? 'stars' : 'clouds'}.svg`)}>
                <Spacing height='200px' />
            </Parallax>
        </div>
    );
}

export default Footer;