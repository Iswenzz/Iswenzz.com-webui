import React, { Component } from 'react';
import TrailText from '../../../../../components/TrailText/TrailText';
import { Typography, Grid } from '@material-ui/core';

const softDev: { title: string, points: string[] } = {
    title: "Software Development",
    points: [
        "• Test",
        "• Test",
        "• Test",
    ]
};
const softDevRes: { titleElem: JSX.Element | null, pointsElem: JSX.Element | null } = {
    titleElem: <TrailText items={[softDev.title]} />,
    pointsElem: <TrailText items={softDev.points} />
}

export interface IntroTextProps
{
    introTextActive?: boolean
}

class IntroText extends Component<IntroTextProps>
{
    render(): JSX.Element
    {
        return (
            <Grid container direction="row" justify="space-evenly" alignItems="center">

                {/* Software Development */}
                <Typography style={{fontFamily: "Ubuntu, sans-serif", fontWeight: 200, fontSize: 20,
                color: 'rgba(220, 220, 220, 0.9)'}} align="center" variant="h5" component="h5">
                    {softDevRes.titleElem}
                    <p style={{textAlign: 'left', fontSize: 14}}>
                        {softDevRes.pointsElem}
                    </p>
                </Typography>

                {/* Software Development */}
                <Typography style={{fontFamily: "Ubuntu, sans-serif", fontWeight: 200, fontSize: 20,
                color: 'rgba(220, 220, 220, 0.9)'}} align="center" variant="h5" component="h5">
                    {softDevRes.titleElem}
                    <p style={{textAlign: 'left', fontSize: 14}}>
                        {softDevRes.pointsElem}
                    </p>
                </Typography>

                {/* Software Development */}
                <Typography style={{fontFamily: "Ubuntu, sans-serif", fontWeight: 200, fontSize: 20,
                color: 'rgba(220, 220, 220, 0.9)'}} align="center" variant="h5" component="h5">
                    {softDevRes.titleElem}
                    <p style={{textAlign: 'left', fontSize: 14}}>
                        {softDevRes.pointsElem}
                    </p>
                </Typography>

            </Grid>
        );
    }
}

export default IntroText;