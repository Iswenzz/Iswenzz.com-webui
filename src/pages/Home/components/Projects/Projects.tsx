import { FC, useMemo, useRef } from "react";
import { Grid, Divider, Container, useTheme } from "@mui/material";
import { TrailText, SpringGrid, Parallax } from "@izui/react";
import classNames from "classnames";
import random from "lodash/random";

import Project, { ProjectSource } from "./components/Project/Project";
import ProjectPopup from "./components/ProjectPopup/ProjectPopup";

import { projectsSource } from "./config/config";
import scss from "./Projects.module.scss";

/**
 * Display the projects in a masonry layout.
 */
const Projects: FC = () => {
	const { theme } = useTheme();

	const projects = useRef<ProjectSource[]>(projectsSource);
	const projectsHeight = useMemo(() => projects.current.map(() => random(100, 220)), []);
	const projectsWidth = 200;

	return (
		<>
			<ProjectPopup projects={projects.current} />
			<Grid
				id="projects"
				component="section"
				className={classNames(scss.projects, scss[theme])}
				justifyContent="center"
				alignItems="center"
			>
				<Container component="header" className={scss.container}>
					<TrailText
						align="center"
						color="textPrimary"
						component="h2"
						variant="h2"
						className="poiret-big noselect"
					>
						PROJECTS
					</TrailText>
					<Divider className={scss.divider} />
				</Container>
				<Grid container component="section" alignItems="center" justifyContent="center">
					<SpringGrid
						gutter={{ height: 10 }}
						itemSize={{ width: projectsWidth }}
						layout="masonry"
					>
						{projects.current.map((project, index) => (
							<Project
								key={project.title}
								projectIndex={index}
								project={project}
								height={projectsHeight[index]}
								width={projectsWidth}
							/>
						))}
					</SpringGrid>
				</Grid>
			</Grid>
			<Parallax spacingTop="50px" />
		</>
	);
};

export default Projects;
