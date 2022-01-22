import { FC } from "react";
import { CircularProgress, Grid, CircularProgressProps } from "@mui/material";

/**
 * Circular progress loader using an MUI Grid.
 */
const Loader: FC<Props> = ({ className, gridClassName, ...props }) => (
	<Grid container justifyContent={"center"} alignItems={"center"} className={gridClassName}>
		<CircularProgress color={"secondary"} className={className} {...props} />
	</Grid>
);

type Props = CircularProgressProps & {
	gridClassName?: string
};

export default Loader;
