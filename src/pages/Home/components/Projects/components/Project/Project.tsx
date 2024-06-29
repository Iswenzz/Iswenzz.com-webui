import { FC, memo } from "react";
import { batch, useDispatch } from "react-redux";
import LazyLoad from "react-lazyload";
import { motion } from "framer-motion";
import { Card, CardActionArea, Typography } from "@mui/material";
import { useResponsive } from "@izui/react";

import { setProjectModalOpen, setProjectModalStartIndex } from "Home/redux";
import { setModalActive, setNavbarActive } from "App/redux";

import scss from "./Project.module.scss";

/**
 * Project card with a preview image and opens the ProjectPopup modal on click.
 */
const Project: FC<ProjectProps> = ({ project, projectIndex, height = 200, width = 200 }) => {
	const dispatch = useDispatch();

	const fontSize = useResponsive({
		desktopAndPortrait: 20,
		mobile: 14
	});

	/**
	 * Open the ProjectPopup modal.
	 */
	const handleClick = () => {
		batch(() => {
			dispatch(setNavbarActive(false));
			dispatch(setModalActive(true));
			dispatch(setProjectModalOpen(true));
			dispatch(setProjectModalStartIndex(projectIndex));
		});
	};

	return (
		<motion.div
			whileHover={{ scale: 1.2 }}
			whileTap={{ scale: 0.9 }}
			itemScope
			itemType="http://schema.org/SoftwareApplication"
		>
			<meta itemProp="image" content={project.cardImage} />
			<meta itemProp="downloadUrl" content={project.sourceURL} />
			<LazyLoad height={height}>
				<Card
					onClick={handleClick}
					className={scss.card}
					style={{ width, height, backgroundImage: `url(${project.cardImage})` }}
				>
					<CardActionArea className={scss.cardAction}>
						<Typography
							className={scss.typo}
							itemProp="name"
							variant="caption"
							align="center"
							style={{ fontSize, height: height / 3 }}
							paragraph
						>
							{project.title}
						</Typography>
					</CardActionArea>
				</Card>
			</LazyLoad>
		</motion.div>
	);
};

export type ProjectSource = {
	title: string;
	isOpenSource: boolean;
	sourceURL: string;
	cardImage: string;
	renderUrl?: string;
	renderIcons?: Icon[];
	renderFile?: JSX.Element[];
};

export type ProjectProps = {
	projectIndex: number;
	project: ProjectSource;
	height?: number;
	width?: number;
	style?: React.CSSProperties;
};

export default memo(Project);
