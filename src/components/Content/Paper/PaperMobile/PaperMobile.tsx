import { FC } from "react";
import { Grid, Typography } from "@mui/material";

import type { PaperProps } from "../Paper";

const PaperMobile: FC<PaperProps> = ({ className, paperStyle, title, description, image, previewStyle }) => (
	<Grid container justifyContent={"center"} alignItems={"center"} className={`paper-mobile ${className}`}>
		<Grid container direction={"column"} justifyContent={"space-evenly"}
				  alignItems={"center"} className={"paper-mobile-container"} style={paperStyle}>
			<header>
				<Typography align={"center"} component={"h2"} variant={"h2"}>
					{title}
				</Typography>
			</header>
			<Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
				<section className={"paper-mobile-preview"} style={previewStyle}>
					<img src={image} alt={"Presentation Paper"} />
				</section>
				<Typography component={"p"} paragraph>
					{description}
				</Typography>
			</Grid>
		</Grid>
	</Grid>
);

export default PaperMobile;
