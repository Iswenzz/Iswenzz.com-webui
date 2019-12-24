import React, { Component } from 'react';

import { Transition, animated } from 'react-spring/renderprops'
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';

class Intro extends Component
{
	render(): JSX.Element
	{
		return (
            <Grid style={{paddingTop: '200px'}} container direction="row" justify="center" alignItems="center">
                <Typography style={{fontFamily: "'Poiret One', sans-serif", fontWeight: 1000,
                color: 'rgba(220, 220, 220, 0.9)'}} align="center" variant="h3" component="h2">

                    {/* Iswenzz */}
                    <div style={{fontFamily: "'Calligraffitti', cursive", fontSize: 60}}>
                        <Transition native items={true} from={{ overflow: 'hidden', height: 0 }}
                        enter={[{ height: 'auto' }]} delay={400} leave={{ height: 0 }}>
                        { show => show && (props => <animated.div style={props}>Iswenzz</animated.div>)}
                        </Transition>
                    </div>

                    {/* Text Below */}
                    <Transition native items={true} from={{ overflow: 'hidden', height: 0 }}
                    enter={[{ height: 'auto' }]} delay={600} leave={{ height: 0 }}>
                    { show => show && (props => <animated.div style={props}>Software Engineer and Level Designer</animated.div>)}
                    </Transition>

                </Typography>
            </Grid>
		);
	}
}

export default Intro;