import { FC, memo, ReactElement } from "react";
import { Masonry as MUIMasonry, MasonryProps as MUIMasonryProps } from "@mui/lab";
import { Grid } from "@mui/material";
import { motion } from "framer-motion";

import useBreakpoint, { BreakpointValues } from "utils/hooks/useBreakpoint";
import "./Masonry.scss";

/**
 * Responsive grid component with masonry layout and animation config.
 * @param props - StonecutterGridProps
 */
const Masonry: FC<MasonryProps> = ({ children = [], columns = { xs: 2, sm: 3, md: 4, lg: 6 }, spacing }) =>
{
	const responsiveColumns = useBreakpoint(columns);

	// return (
	// 	<Grid className="masonry" container justifyContent={"center"} alignItems={"center"}>
	// 		<MUIMasonry component={"ul"} spacing={spacing} columns={responsiveColumns}>
	// 			{children.map((child, index) => (
	// 				<li key={index} className="masonry-item">
	// 					<motion.div transition={spring} layout>
	// 						{child}
	// 					</motion.div>
	// 				</li>
	// 			))}
	// 		</MUIMasonry>
	// 	</Grid>
	// );
	return (
		<Grid className="masonry" container justifyContent={"center"} alignItems={"center"}>
			<MUIMasonry component={"ul"} spacing={spacing} columns={responsiveColumns}>
				{children.map((child, index) => (
					<li key={index} className="masonry-item">
						<motion.div transition={spring} layout={"position"}>
							{child}
						</motion.div>
					</li>
				))}
			</MUIMasonry>
		</Grid>
	);
};

export type MasonryProps = MUIMasonryProps & {
	columns?: BreakpointValues<number>,
	children: ReactElement[]
};

export const spring = { 
	type: "spring",
	stiffness: 100, 
	damping: 12,
	duration: 2
};

export default memo(Masonry);
