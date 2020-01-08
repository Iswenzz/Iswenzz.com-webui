import React, { FunctionComponent } from 'react';
import * as actions from '../../store/actions';
import { useScrollPercentage } from 'react-scroll-percentage';
import { useDispatch, useSelector } from 'react-redux';
import { Transition, animated } from 'react-spring'
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import { AppState } from '../../../..';
import '../../../../Text.scss';
import SplitText from 'react-pose-text';

const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }: any) => charIndex * 30
    }
};

const Intro: FunctionComponent = (): JSX.Element =>
{
    const introTextActive = useSelector((state: AppState) => state.home.introTextActive);
    const dispatch = useDispatch();
    const [ref, percentage] = useScrollPercentage({
        threshold: 0,
    });
    if (!introTextActive && percentage > 0.9) 
        dispatch(actions.toggleIntroText(true));

	return (
        <Grid ref={ref} style={{paddingTop: '200px'}} container direction="row" justify="center" alignItems="center">
            <Typography align="center" variant="h3" component="h2">

                {/* Iswenzz */}
                <div className='calli-title'>
                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                        Iswenzz
                    </SplitText>
                </div>

                {/* Text Below */}
                <div className='poiret-title'>
                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                        Software Engineer and Level Designer
                    </SplitText>
                </div>

            </Typography>
        </Grid>
    );
}

export default Intro;