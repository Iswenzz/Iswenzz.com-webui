import { FC } from "react";
import { CircularProgress, Grid, GridProps } from "@material-ui/core";

/**
 * Circular progress loader using an MUI Grid.
 */
const Loader: FC<GridProps> = (props) => (
	<Grid container justify={"center"} alignItems={"center"} {...props}>
		<CircularProgress color={"secondary"} />
	</Grid>
);

export default Loader;
