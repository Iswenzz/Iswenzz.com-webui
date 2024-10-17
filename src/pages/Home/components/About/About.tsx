import { FC } from "react";
import { Grid } from "@mui/material";

import Skills from "./Skills/Skills";
import Intro from "./Intro/Intro";

/**
 * Introduce my portfolio and technological skills.
 */
const About: FC = () => (
	<Grid id="intro" component="section">
		<Intro />
		<Skills />
	</Grid>
);

export default About;
