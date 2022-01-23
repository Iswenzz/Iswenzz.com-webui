import { FC, memo, useEffect, useMemo, useRef } from "react";
import { Element } from "react-scroll";
import { useInView } from "react-intersection-observer";
import { Grid, Divider, Container, useTheme } from "@mui/material";
import classNames from "classnames";
import { random, shuffle } from "lodash";

import { TrailText, SpringGrid, Parallax } from "components";
import useResponsive from "utils/hooks/useResponsive";

import Project, { ProjectSource } from "./Project/Project";
import projectsJson from "./Projects.json";
import { ProjectPopup } from "./ProjectPopup/ProjectPopup";

import scss from "./Projects.module.scss";

/**
 * Display the projects in a masonry layout.
 */
const Projects: FC = () =>
{
	const { theme } = useTheme();
	const [ref, inView] = useInView({ triggerOnce: true });

	const projects = useRef<ProjectSource[]>(projectsJson);
	const projectsHeight = useMemo(() => projects.current.map(() => random(100, 220)), []);
	const projectsWidth = useResponsive({
		desktopAndPortrait: 200,
		mobile: 100
	});

	useEffect(() =>
	{
		projects.current = shuffle(projects.current);
	}, [inView]);

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
				<Grid ref={ref} container component="section" alignItems="center" justifyContent="center">
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
