import { FC, memo } from "react";
import { Element } from "react-scroll";
import { useSelector } from "react-redux";
import random from "lodash/random";

import { Grid, Divider, Container, useTheme } from "@mui/material";

import { Spacing, TrailText, Gradient, GradientProps, Masonry } from "Components";
import usePortrait from "utils/hooks/usePortrait";
import useTabletOrMobile from "utils/hooks/useTabletOrMobile";
import { getProjects } from "Home/redux";

import Project from "../Project/Project";
import "./Projects.scss";

/**
 * Display the projects in a masonry layout.
 */
const Projects: FC = () =>
{
	const isPortrait = usePortrait();
	const isTabletOrMobile = useTabletOrMobile();
	const { isDarkTheme } = useTheme();

	const projects = useSelector(getProjects);

	const config: GradientProps = isDarkTheme ? {
		gradientPosition: `${isTabletOrMobile ? "circle" : "ellipse"} at center`, 
		colors: [
			{ color: "#3c0084", colorPercent: "0%" },
			{ color: "#0e0f14", colorPercent: "50%" }
		]
	} : {
		linear: true,
		gradientPosition: "144deg", 
		colors: [
			{ color: "#ffffff" },
			{ color: "#f4f4f4" }
		]
	};

	return (
		<section className="projects">
			<Element name="projects-section" />
			<Gradient config={config} className="projects-gradient-grid">
				<Container component="header" className="projects-container">
					<TrailText i18n align="center" color="textPrimary" component="h2" variant="h2"
						className="poiret-h1 noselect" active items={["PROJECTS"]} />
					<Divider className="projects-divider" />
				</Container>
				<Grid container component="section" direction="row" alignItems="center" justifyContent="center">
					<Masonry spacing={0}>
						{projects.map((project, index) => (
							<Project 
								key={project.title}
								projectIndex={index}
								project={project} 
								height={isTabletOrMobile ? undefined : random(100, 220)}
							/> 
						))}
					</Masonry>
				</Grid>
				<Spacing height={isPortrait ? "1500px" : isTabletOrMobile ? "500px" : "1000px"} />
			</Gradient>     
		</section>
	);
};

export default memo(Projects);
