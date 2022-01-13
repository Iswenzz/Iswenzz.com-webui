import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import LazyLoad from "react-lazyload";
import {motion} from "framer-motion";

import { Card, CardActionArea, Typography } from "@mui/material";

import useTabletOrMobile from "utils/hooks/useTabletOrMobile";
import { setProjectsStartIndex } from "Home/redux";
import { setModalActive } from "App/redux";

import "./Project.scss";

/**
 * Project card container with a preview image, and dispatch ProjectPopup modal on click.
 * @param props - ProjectProps
 */
const Project: FC<ProjectProps> = ({ project, projectIndex, height = 200, width = 200 }) =>
{
	const isTabletOrMobile = useTabletOrMobile();
	const dispatch = useDispatch();

	/**
	 * Card click handler: toggle the ProjectPopup modal.
	 */
	const onToggle = () =>
	{
		dispatch(setProjectsStartIndex(projectIndex));
		dispatch(setModalActive(true));
	};

	return (
		<motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}
			itemScope itemType="http://schema.org/SoftwareApplication" className="project">
			<meta itemProp="image" content={project.cardImage} />
			<meta itemProp="downloadUrl" content={project.sourceURL} />
			<LazyLoad height={height}>
				<Card onClick={onToggle} className="project-card"
				  style={{ width, height, backgroundImage: `url(${project.cardImage})`}}>
					<CardActionArea className="project-card-action">
						<Typography itemProp="name" variant="caption" align="center" paragraph component="p"
							style={{ fontSize: isTabletOrMobile ? 14 : 20, height: height / 3 }}>
							{project.title}
						</Typography>
					</CardActionArea>
				</Card>
			</LazyLoad>
		</motion.div>
	);
};

export type ProjectRender = {
	renderUrl?: string,
	renderIcons?: ProjectIcon[],
	renderFile?: JSX.Element[]
};

export type ProjectIcon = {
	src: string,
	name: string
};

export type ProjectSource = {
	title: string,
	isOpenSource: boolean,
	sourceURL: string,
	cardImage: string
};

export type ProjectProps = {
	projectIndex: number,
	project: ProjectSource,
	height?: number,
	width?: number,
	style?: React.CSSProperties
};

export default memo(Project);
