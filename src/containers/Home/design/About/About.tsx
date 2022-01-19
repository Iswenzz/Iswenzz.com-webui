import { memo, FC } from "react";
import { Element } from "react-scroll";
import { Parallax } from "react-parallax";
import { Grid } from "@mui/material";

import { Spacing } from "components";
import useThemeMode from "utils/hooks/useThemeMode";
import stars from "assets/images/index/stars.svg";
import clouds from "assets/images/index/clouds.svg";

import Skills from "./Skills/Skills";
import Intro from "./Intro/Intro";


/**
 * Introduce my portfolio and technological skills.
 */
const About: FC = () =>
{
	const { parallaxImage } = useThemeMode({ 
		parallaxImage: [stars, clouds]
	});

	return (
		<Grid container component="section" direction="column" justifyContent="center" alignItems="stretch">
			<Element name="intro-section" />

			<Intro />

			<Parallax bgImageAlt="index" strength={400} bgImage={parallaxImage}>
				<Spacing height="100px" />
			</Parallax>

			<Skills />

			<Parallax bgImageAlt="index" strength={400} bgImage={parallaxImage}>
				<Spacing height="100px" />
			</Parallax>
		</Grid>
	);
};

export default memo(About);
