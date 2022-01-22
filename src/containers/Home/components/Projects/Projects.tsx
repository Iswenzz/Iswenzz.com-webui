import { FC, memo } from "react";
import { Element } from "react-scroll";
import random from "lodash/random";
import { Grid, Divider, Container, useTheme } from "@mui/material";
import classNames from "classnames";

import { TrailText, SpringGrid, Parallax } from "components";

import Project, { ProjectSource } from "./Project/Project";
import projectsJson from "./Projects.json";
import { ProjectPopup } from "./ProjectPopup/ProjectPopup";

import scss from "./Projects.module.scss";

const projects: ProjectSource[] = projectsJson;

/**
 * Display the projects in a masonry layout.
 */
const Projects: FC = () =>
{
	const { theme } = useTheme();

	return (
		<>
			<ProjectPopup projects={projects} />
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
