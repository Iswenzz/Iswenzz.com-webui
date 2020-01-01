import React, { FunctionComponent } from 'react';
import * as actions from '../../store/actions';

import { useScrollPercentage } from 'react-scroll-percentage';
import { useDispatch } from 'react-redux';
import { Transition, animated } from 'react-spring'
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import '../../../../Text.scss';

const Intro: FunctionComponent = (props): JSX.Element =>
{
    const dispatch = useDispatch();
    const [ref, percentage] = useScrollPercentage({
        threshold: 0,
    });
    if (percentage > 0.3)
        dispatch(actions.toggleIntroText(true));

	return (
        <Grid ref={ref} style={{paddingTop: '200px'}} container direction="row" justify="center" alignItems="center">
            <Typography align="center" variant="h3" component="h2">

                {/* Iswenzz */}
                <div className='calli-title'>
                    <Transition items={true} from={{ overflow: 'hidden', height: 0 }}
                    enter={[{ height: 'auto' }]} leave={{ height: 0 }}>
                    { show => show && (props => <animated.div style={props}>Iswenzz</animated.div>)}
                    </Transition>
                </div>

                {/* Text Below */}
                <div className='poiret-title'>
                    <Transition items={true} from={{ overflow: 'hidden', height: 0 }}
                    enter={[{ height: 'auto' }]} leave={{ height: 0 }}>
                    { show => show && (props => <animated.div style={props}>Software Engineer and Level Designer</animated.div>)}
                    </Transition>
                </div>

            </Typography>
        </Grid>
    );
}

export default Intro;