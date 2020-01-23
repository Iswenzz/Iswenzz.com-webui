import React, { memo, Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import SplitText from 'react-pose-text';
import '../../../../Text.scss';

const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }: any) => charIndex * 30
    }
};

class Intro extends Component
{
    render(): JSX.Element
    {
        return (
            <Grid style={{paddingTop: '200px'}} container direction="row" justify="center" alignItems="center">
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
}

export default memo(Intro);