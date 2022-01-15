import { FC } from "react";
import { Container, Grid, Typography } from "@mui/material";
import classNames from "classnames";

import type { PaperProps } from "../Paper";

import scss from "./PaperDesktop.module.scss";

const PaperDesktop: FC<PaperProps> = ({ className, style, title, description, image, previewStyle }) => (
	<Grid container justifyContent={"center"} alignItems={"center"} 
		className={classNames(scss.paper, className)}>
		<Grid container direction={"column"} justifyContent={"space-evenly"}
			  alignItems={"center"} className={scss.container} style={style}>
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
			<section className={scss.preview} style={previewStyle}>
				<img src={image} alt={"Presentation Paper"} />
			</section>
		</Grid>
	</Grid>
);

export default PaperDesktop;
