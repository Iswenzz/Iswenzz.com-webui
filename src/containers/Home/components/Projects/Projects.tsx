import { FC, memo, useMemo, useRef } from "react";
import { Element } from "react-scroll";
import { Grid, Divider, Container, useTheme } from "@mui/material";
import classNames from "classnames";
import { random } from "lodash";

import { TrailText, SpringGrid, Parallax } from "components";
import useResponsive from "utils/hooks/useResponsive";

import Project, { ProjectSource } from "./components/Project/Project";
import { ProjectPopup } from "./components/ProjectPopup/ProjectPopup";

import { projectsSource } from "./config/config";
import scss from "./Projects.module.scss";

/**
 * Display the projects in a masonry layout.
 */
const Projects: FC = () =>
{
	const { theme } = useTheme();

	const projects = useRef<ProjectSource[]>(projectsSource);
	const projectsHeight = useMemo(() => projects.current.map(() => random(100, 220)), []);
	const projectsWidth = useResponsive({
		desktopAndPortrait: 200,
		mobile: 100
	});

	return (
		<>
			<ProjectPopup projects={projects.current} />
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
					<SpringGrid itemSize={{ width: projectsWidth }} layout="masonry">
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

			<Parallax spacingTop="100px" />
		</>
	);
};

export default memo(Projects);
