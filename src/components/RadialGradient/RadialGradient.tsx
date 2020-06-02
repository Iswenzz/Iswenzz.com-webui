import React, { PureComponent } from 'react';
import { Grid, GridDirection, GridJustification, GridItemsAlignment, Box } from '@material-ui/core';

export interface IGradientColor
{
    color: string,
    colorPercent?: string
}

export interface GradiantProps extends React.HTMLAttributes<HTMLDivElement>
{
    config?: GradiantProps,
    container?: boolean,
    linear?: boolean,
    direction?: GridDirection,
    justify?: GridJustification,
    alignItems?: GridItemsAlignment
    position?: string,
    colors?: IGradientColor[],
}  

/**
 * Radial gradient grid container.
 */
class RadialGradient extends PureComponent<GradiantProps>
{
    processBackgroundColor = (position?: string, propsColors?: IGradientColor[], isLinear?: boolean): string =>
    {
        let colors: string = '';
        if (isLinear)
        {
            propsColors?.forEach((c, index, arr) => 
                colors += `${c.color} ${(index + 1 !== arr.length) ? ',' : ''}`);
            return `linear-gradient(${position}, ${colors})`;
        }
        else
        {
            propsColors?.forEach((c, index, arr) => 
                colors += `${c.color} ${c.colorPercent} ${(index + 1 !== arr.length) ? ',' : ''}`);
            return `radial-gradient(${position}, ${colors})`;
        }
    }

    render(): JSX.Element
    {
        const { container, id, justify, alignItems, direction, 
            position, colors, linear } = this.props.config !== undefined ? this.props.config : this.props;
            
        return container ? (
            <Box id={id} style={{ ...this.props.style, margin: '0', 
            background: this.processBackgroundColor(position, colors, linear) }}>
                {this.props.children}
            </Box>
        ) : (
            <Grid id={id} container direction={direction || 'row'} 
            justify={justify || 'center'} alignItems={alignItems || 'center'} 
            style={{ ...this.props.style, background: this.processBackgroundColor(position, colors, linear) }}>
                {this.props.children}
            </Grid>
        );
    }
}

export default RadialGradient;