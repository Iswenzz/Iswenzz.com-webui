import React, { Component } from 'react';

export interface IGradientColor
{
    color: string,
    colorPercent: string
}

export interface GradiantProps
{
    height?: string,
    position?: string,
    colors?: IGradientColor[]
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
        return (
            <div style={{ height: this.props.height, background: this.processBackgroundColor() }}>
                {this.props.children}
            </div>
        );
    }
}

export default RadialGradient;