import React, { Component } from 'react';
import { Grid, GridDirection, GridJustification, GridItemsAlignment, Container, Box } from '@material-ui/core';

export interface IGradientColor
{
    color: string,
    colorPercent: string
}

export interface GradiantProps
{
    container?: boolean,
    id?: string,
    direction?: GridDirection,
    justify?: GridJustification,
    alignItems?: GridItemsAlignment
    position?: string,
    colors?: IGradientColor[],
    style?: React.CSSProperties
}  

class RadialGradient extends Component<GradiantProps>
{
    processBackgroundColor = (): string =>
    {
        let colors: string = '';
        this.props.colors?.forEach((c, index, arr) => 
            colors += `${c.color} ${c.colorPercent} ${(index + 1 !== arr.length) ? ',' : ''}`);
        return `radial-gradient(${this.props.position}, ${colors})`;
    }

    render() : JSX.Element
    {
        return this.props.container ? (
            <Box id={this.props.id} style={{ ...this.props.style, margin: '0', background: this.processBackgroundColor() }}>
                {this.props.children}
            </Box>
        ) : (
            <Grid id={this.props.id} container direction={this.props.direction || 'row'} 
            justify={this.props.justify || 'center'} alignItems={this.props.alignItems || 'center'} 
            style={{ ...this.props.style, background: this.processBackgroundColor() }}>
                {this.props.children}
            </Grid>
        );
    }
}

export default RadialGradient;