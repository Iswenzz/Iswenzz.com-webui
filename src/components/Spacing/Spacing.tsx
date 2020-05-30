import React, { PureComponent, memo } from 'react';

export interface SpacingProps
{
    height?: string,
    style?: React.CSSProperties
}

export class Spacing extends PureComponent<SpacingProps>
{
    render(): JSX.Element
    {
        return (
            <div style={{...this.props.style, height: this.props.height}} />
        );
    }
}

export default memo(Spacing);