import React, { FunctionComponent, memo } from 'react';
import { SpringGrid, enterExitStyle, SpringGridProps, makeResponsive, layout } from 'react-stonecutter';

export interface StonecutterGridProps
{
    config: SpringGridProps,
    animStyle?: typeof enterExitStyle | any,
    children?: JSX.Element[],
    responsive?: boolean 
    layout?: typeof layout;
}

export const StonecutterGrid: FunctionComponent<StonecutterGridProps> = (props: StonecutterGridProps): JSX.Element =>
{
    const ResponsiveGrid = makeResponsive(SpringGrid, { maxWidth: 1920, minPadding: 100 });

    return (
        <ResponsiveGrid enter={props.animStyle?.enter} entered={props.animStyle?.entered} exit={props.animStyle?.exit} 
        component={props.config?.component} perspective={props.config?.perspective}
        columns={props.responsive !== undefined && props.responsive ? 5 : props.config?.columns} 
        columnWidth={props.config?.columnWidth} gutterWidth={props.config?.gutterWidth} 
        gutterHeight={props.config?.gutterHeight} springConfig={props.config?.springConfig}
        layout={props.config?.layout}>
            {props.children}
        </ResponsiveGrid>
    );
}

export default memo(StonecutterGrid);