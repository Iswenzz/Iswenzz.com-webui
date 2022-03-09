import { memo, FC } from "react";
import { Grid } from "@mui/material";
import { Element, Parallax } from "@izui/react";

import Skills from "./Skills/Skills";
import Intro from "./Intro/Intro";


/**
 * Introduce my portfolio and technological skills.
 */
const About: FC = () => (
	<Grid container component="section" direction="column" justifyContent="center" alignItems="stretch">
		<Element name="intro" />

		<Intro />
		<Parallax spacingTop="100px" />

		<Skills />
		<Parallax spacingTop="100px" />
	</Grid>
);

export default memo(About);
