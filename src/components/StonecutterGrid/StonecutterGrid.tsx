import React, { FunctionComponent } from 'react';
import { SpringGrid, enterExitStyle, SpringGridProps, makeResponsive } from 'react-stonecutter';

export interface StonecutterGridProps
{
    config: SpringGridProps,
    animStyle?: typeof enterExitStyle | any,
    children?: JSX.Element[],
    responsive?: boolean 
}

const ResponsiveGrid = makeResponsive(SpringGrid, { maxWidth: 1920, minPadding: 100 });

const StonecutterGrid: FunctionComponent<StonecutterGridProps> = (props: StonecutterGridProps): JSX.Element =>
{
    return (
        <ResponsiveGrid enter={props.animStyle?.enter} entered={props.animStyle?.entered} exit={props.animStyle?.exit} 
        component={props.config?.component} perspective={props.config?.perspective}
        columns={props.responsive !== undefined && props.responsive ? 5 : props.config?.columns} 
        columnWidth={props.config?.columnWidth} gutterWidth={props.config?.gutterWidth} 
        gutterHeight={props.config?.gutterHeight} springConfig={props.config?.springConfig}>
            {props.children}
        </ResponsiveGrid>
    );
}

export default StonecutterGrid;