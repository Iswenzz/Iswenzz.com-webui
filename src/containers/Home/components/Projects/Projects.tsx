import { FC, memo } from "react";
import { Element } from "react-scroll";
import { useSelector } from "react-redux";
import random from "lodash/random";

import { Grid, Divider, Container, useTheme } from "@mui/material";

import { Spacing, TrailText, Gradient, GradientProps, SpringGrid } from "components";
import usePortrait from "utils/hooks/usePortrait";
import useTabletOrMobile from "utils/hooks/useTabletOrMobile";
import { getProjects } from "Home/redux";

import scss from "./Projects.module.scss";
import Project from "./Project/Project";

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
		<section>
			<Element name="projects-section" />
			<Gradient config={config} className={scss.gradient}>
				<Container component="header" className={scss.container}>
					<TrailText align="center" color="textPrimary" component="h2" variant="h2"
						className="poiret-h1 noselect">
						PROJECTS
					</TrailText>
					<Divider className={scss.divider} />
				</Container>
				<Grid container component="section" alignItems="center" justifyContent="center">
					<SpringGrid layout="masonry">
						{projects.map((project, index) => (
							<Project
								key={project.title}
								projectIndex={index}
								project={project} 
								height={isTabletOrMobile ? undefined : random(100, 220)}
								width={200}
							/> 
						))}
					</SpringGrid>
				</Grid>
				<Spacing height={isPortrait ? "1500px" : isTabletOrMobile ? "500px" : "1000px"} />
			</Gradient>     
		</section>
	);
};

export default memo(Projects);
