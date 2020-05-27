import React, { memo, Component } from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import SplitText from 'react-pose-text';
import 'Text.scss';

const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
      opacity: 1,
      y: 0,
      delay: ({ charIndex }: any) => charIndex * 30
    }
};

export interface IntroProps
{
    title?: string,
    desc?: string,
}

export class Intro extends Component<IntroProps>
{
    render(): JSX.Element
    {
        return (
            <Grid style={{paddingTop: '200px'}} container direction="row" justify="center" alignItems="center">
                <Typography align="center" variant="h3" component="h2">
    
                    {/* Iswenzz */}
                    <div className='calli-h1'>
                        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                            {this.props.title}
                        </SplitText>
                    </div>
    
                    {/* Text Below */}
                    <div className='poiret-h1'>
                        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                            {this.props.desc}
                        </SplitText>
                    </div>
    
                </Typography>
            </Grid>
        );
    }
}

export default memo(Intro);