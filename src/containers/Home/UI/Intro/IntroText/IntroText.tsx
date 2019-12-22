import * as actions from '../../../store/actions';
import React, { FunctionComponent } from 'react';
import { useScrollPercentage } from 'react-scroll-percentage';
import TrailText from '../../../../../components/TrailText/TrailText';
import { Typography, Grid } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../../../../../index';

const softDev: { title: string, points: string[] } = {
    title: "Software Development",
    points: [
        "• Test",
        "• Test",
        "• Test",
    ]
};

export interface IntroTextProps
{
    introTextActive?: boolean
}

const IntroText: FunctionComponent<IntroTextProps> = (props: IntroTextProps): JSX.Element =>
{
    const isVisible = useSelector((state: AppState) => state.home.introTextActive);
    const dispatch = useDispatch();
    const [ref, percentage] = useScrollPercentage({
        threshold: 0,
    });

    if (percentage > 0.3)
        dispatch(actions.toggleIntroText(true));

    return (
        <div ref={ref}>
            <Grid container direction="row" justify="space-evenly" alignItems="center">

                {/* Software Development */}
                <Typography style={{fontFamily: "Ubuntu, sans-serif", fontWeight: 200, fontSize: 20,
                color: 'rgba(220, 220, 220, 0.9)'}} align="center" variant="h5" component="h5">
                    <TrailText active={isVisible} items={[softDev.title]} />
                    <p style={{textAlign: 'left', fontSize: 14}}>
                        <TrailText active={isVisible} items={softDev.points} />
                    </p>
                </Typography>

                {/* Software Development */}
                <Typography style={{fontFamily: "Ubuntu, sans-serif", fontWeight: 200, fontSize: 20,
                color: 'rgba(220, 220, 220, 0.9)'}} align="center" variant="h5" component="h5">
                    <TrailText active={isVisible} items={[softDev.title]} />
                    <p style={{textAlign: 'left', fontSize: 14}}>
                        <TrailText active={isVisible} items={softDev.points} />
                    </p>
                </Typography>

                {/* Software Development */}
                <Typography style={{fontFamily: "Ubuntu, sans-serif", fontWeight: 200, fontSize: 20,
                color: 'rgba(220, 220, 220, 0.9)'}} align="center" variant="h5" component="h5">
                    <TrailText active={isVisible} items={[softDev.title]} />
                    <p style={{textAlign: 'left', fontSize: 14}}>
                        <TrailText active={isVisible} items={softDev.points} />
                    </p>
                </Typography>

            </Grid>
        </div>
    );
}

export default IntroText;