import { FC } from "react";
import { CircularProgress, Grid, GridProps } from "@mui/material";

/**
 * Circular progress loader using an MUI Grid.
 */
const Loader: FC<GridProps> = (props) => (
	<Grid container justifyContent={"center"} alignItems={"center"} {...props}>
		<CircularProgress color={"secondary"} />
	</Grid>
);

export default Loader;
