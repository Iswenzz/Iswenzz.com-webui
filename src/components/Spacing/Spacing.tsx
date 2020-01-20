import React, { Component, memo } from 'react';

export interface SpacingProps
{
    height?: string,
    style?: React.CSSProperties
}

class Spacing extends Component<SpacingProps>
{
    render(): JSX.Element
    {
        return (
            <div style={{...this.props.style, height: this.props.height}} />
        );
    }
}

export default memo(Spacing);