import { FC } from "react";
import { Container, Grid, Typography } from "@mui/material";

import type { PaperProps } from "../Paper";

const PaperDesktop: FC<PaperProps> = ({ className, paperStyle, title, description, image, previewStyle }) => (
	<Grid container justifyContent={"center"} alignItems={"center"} className={`paper ${className}`}>
		<Grid container direction={"column"} justifyContent={"space-evenly"}
			  alignItems={"center"} className={"paper-container"} style={paperStyle}>
			<header>
				<Typography align={"center"} component={"h2"} variant={"h2"}>
					{title}
				</Typography>
			</header>
			<Container>
				<Typography component={"p"} paragraph>
					{description}
				</Typography>
			</Container>
			<section className={"paper-preview"} style={previewStyle}>
				<img src={image} alt={"Presentation Paper"} />
			</section>
		</Grid>
	</Grid>
);

export default PaperDesktop;
