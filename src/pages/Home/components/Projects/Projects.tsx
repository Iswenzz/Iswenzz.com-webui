import { FC, useMemo, useRef } from "react";
import { Grid, Divider, Container } from "@mui/material";
import { TrailText, SpringGrid } from "@izui/react";
import random from "lodash/random";

import { Parallax } from "components";

import Project, { ProjectSource } from "./components/Project/Project";
import ProjectPopup from "./components/ProjectPopup/ProjectPopup";

import { projectsSource } from "./config/config";
import scss from "./Projects.module.scss";

/**
 * Display the projects in a masonry layout.
 */
const Projects: FC = () => {
	const projects = useRef<ProjectSource[]>(projectsSource);
	const projectsHeight = useMemo(() => projects.current.map(() => random(100, 220)), []);
	const projectsWidth = 200;

	return (
		<Grid id="projects" className={scss.projects} component="section">
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
			<Grid
				container
				component="section"
				alignItems="center"
				justifyContent="center"
				padding={4}
			>
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
			<Parallax spacingTop="50px" />
			<ProjectPopup projects={projects.current} />
		</Grid>
	);
};

export default Projects;
