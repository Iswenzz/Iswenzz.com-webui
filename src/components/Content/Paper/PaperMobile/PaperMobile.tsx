import { FC } from "react";
import { Grid, Typography } from "@mui/material";
import classNames from "classnames";

import type { PaperProps } from "../Paper";

import scss from "./PaperMobile.module.scss";

const PaperMobile: FC<PaperProps> = ({ className, style, title, description, image, previewStyle }) => (
	<Grid container justifyContent={"center"} alignItems={"center"}
		className={classNames(scss.paper, className)}>
		<Grid container direction={"column"} justifyContent={"space-evenly"}
				  alignItems={"center"} className={scss.container} style={style}>
			<header>
				<Typography align={"center"} component={"h2"} variant={"h2"}>
					{title}
				</Typography>
			</header>
			<Grid container direction={"column"} justifyContent={"center"} alignItems={"center"}>
				<section className={scss.preview} style={previewStyle}>
					<img src={image} alt={"Presentation Paper"} />
				</section>
				<Typography paragraph>
					{description}
				</Typography>
			</Grid>
		</Grid>
	</Grid>
);

export default PaperMobile;
