import { FC } from "react";
import { Grid } from "@mui/material";
import { Parallax } from "@izui/react";

import Skills from "./Skills/Skills";
import Intro from "./Intro/Intro";

/**
 * Introduce my portfolio and technological skills.
 */
const About: FC = () => (
	<Grid
		container
		id="intro"
		component="section"
		direction="column"
		justifyContent="center"
		alignItems="stretch"
	>
		<Intro />
		<Parallax spacingTop="100px" />
		<Skills />
		<Parallax spacingTop="100px" />
	</Grid>
);

export default About;
