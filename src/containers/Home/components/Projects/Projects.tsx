import { FC, memo } from "react";
import { Element } from "react-scroll";
import { useSelector } from "react-redux";
import random from "lodash/random";
import classNames from "classnames";

import { Grid, Divider, Container, useTheme } from "@mui/material";

import { TrailText, SpringGrid, Parallax } from "components";
import { getProjects } from "Home/redux";

import Project from "./Project/Project";
import scss from "./Projects.module.scss";

/**
 * Display the projects in a masonry layout.
 */
const Projects: FC = () =>
{
	const { theme } = useTheme();

	const projects = useSelector(getProjects);

	return (
		<>
			<Element name="projects-section" />
			<Grid component="section" className={classNames(scss.projects, scss[theme])} 
				justifyContent={"center"} alignItems={"center"}>
				<Container component="header" className={scss.container}>
					<TrailText align="center" color="textPrimary" component="h2" variant="h2" className="poiret-h1 noselect">
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
								height={random(100, 220)}
								width={200}
							/> 
						))}
					</SpringGrid>
				</Grid>
			</Grid>
			<Parallax spacingTop="100px" />
		</> 
	);
};

export default memo(Projects);
