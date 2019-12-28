import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import RadialGradient from '../../../components/RadialGradient/RadialGradient';
import { GitHub, YouTube, LinkedIn } from '@material-ui/icons';

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
                    <Fab color="primary" style={{ margin: 20 }} aria-label="add">
                        <GitHub />
                    </Fab>
                    <Fab color="primary" style={{ margin: 20 }} aria-label="add">
                        <YouTube />
                    </Fab>
                    <Fab color="primary" style={{ margin: 20 }} aria-label="add">
                        <LinkedIn />
                    </Fab>
                </Grid>
            </RadialGradient>
        );
    }
}

export default Footer;