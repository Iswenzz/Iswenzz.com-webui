import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import RadialGradient from '../../../components/RadialGradient/RadialGradient';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faYoutube, faGithub } from '@fortawesome/free-brands-svg-icons';

class Footer extends Component
{
    render(): JSX.Element
    {
        return (
            <RadialGradient position='ellipse at bottom' colors={[
                { color: '#23272A', colorPercent: '0%' },
                { color: '#23272F', colorPercent: '100%' }
            ]}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Fab href='https://github.com/iswenzz' color="primary" style={{ margin: 20 }} aria-label="add">
                        <FontAwesomeIcon color='silver' icon={faGithub} size='2x' />
                    </Fab>
                    <Fab href='https://www.youtube.com/c/iswenzz' color="primary" style={{ margin: 20 }} aria-label="add">
                        <FontAwesomeIcon color='#FF0000' icon={faYoutube} size='2x' />
                    </Fab>
                    <Fab href='https://github.com/iswenzz' color="primary" style={{ margin: 20 }} aria-label="add">
                        <FontAwesomeIcon color='#7289da' icon={faDiscord} size='2x' />
                    </Fab>
                </Grid>
            </RadialGradient>
        );
    }
}

export default Footer;