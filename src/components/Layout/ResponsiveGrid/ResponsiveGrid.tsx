import { FC, memo } from "react";
// import { Grid } from "@mui/material";
// import { SpringGrid, enterExitStyle, SpringGridProps, makeResponsive, layout } from "react-stonecutter";

export type StonecutterGridProps = {
	// config: SpringGridProps,
	// animStyle?: typeof enterExitStyle | any,
	children?: JSX.Element[],
	responsive?: boolean 
	// layout?: typeof layout;
};

/**
 * Responsive grid component with layout/animation config.
 * @param props - StonecutterGridProps
 */
export const StonecutterGrid: FC<StonecutterGridProps> = (props: StonecutterGridProps): JSX.Element =>
{
	// const ResponsiveGrid: typeof SpringGrid = makeResponsive(SpringGrid, { 
	// 	maxWidth: 1920, 
	// 	minPadding: 100 
	// });

	return <></>;
	// return (
	// 	// <ResponsiveGrid {...props.config} enter={props.animStyle?.enter} 
	// 	// 	entered={props.animStyle?.entered} exit={props.animStyle?.exit}
	// 	// 	columns={props.responsive !== undefined && props.responsive ? 5 : props.config?.columns}>
	// 	// 	{props.children}
	// 	// </ResponsiveGrid>
	// );
	// return (
	// 	<Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
	// 		{Array.from(Array(6)).map((_, index) => (
	// 			<Grid item xs={2} sm={4} md={4} key={index}>
	// 				<div>xs=2</div>
	// 			</Grid>
	// 		))}
	// 	</Grid>
	// );
};

export default memo(StonecutterGrid);
