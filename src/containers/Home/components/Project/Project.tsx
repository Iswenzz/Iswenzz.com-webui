import { FC, memo } from "react";
import { Card, CardActionArea, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import useTabletOrMobile from "utils/hooks/useTabletOrMobile";
import {motion} from "framer-motion";
import "./Project.scss";
import LazyLoad from "react-lazyload";
import { setProjectsStartIndex } from "Home/redux";
import { setModalActive } from "App/redux";

export type ProjectRenderProps = {
	renderUrl?: string,
	renderStyle?: React.CSSProperties,
	renderIcons?: IconProps[],
	renderFile?: JSX.Element[]
};

export type IconProps = {
	src: string,
	name: string
};

export type ProjectCarouselProps = {
	carouselImages?: string[],
	carouselStyle?: React.CSSProperties
};

export type CardProps = {
	title?: string,
	showTitle?: boolean,
	desc?: string,
	isOpenSource?: boolean,
	sourceURL?: string,
	description?: string,
	cardImage?: string,
	altImage?: string,
	style?: React.CSSProperties,
	width: string,
	height: string,
	carousel?: boolean
};

export type LinkedProjectProps = CardProps & ProjectRenderProps & ProjectCarouselProps;

export type ProjectProps = {
	projects: LinkedProjectProps[],
	currentProj: LinkedProjectProps,
	itemHeight?: number,
	visible?: boolean
};

/**
 * Project card container with a preview image, and dispatch ProjectPopup modal on click.
 * @param props - ProjectProps
 */
export const Project: FC<ProjectProps> = (props: ProjectProps): JSX.Element =>
{
	const isTabletOrMobile = useTabletOrMobile();
	const dispatch = useDispatch();

	/**
     * Card click handler: toggle the ProjectPopup modal.
     */
	const onToggle = () =>
	{
		dispatch(setProjectsStartIndex(props.projects.indexOf(props.currentProj)));
		dispatch(setModalActive(true));
	};

	/**
     * Responsive card size.
     */
	const cardSize: { width: number, height: number } = isTabletOrMobile ? {
		width: parseInt(props.currentProj.width, 10) / 2,
		height: (props.itemHeight === undefined) ? parseInt(props.currentProj.height, 10) / 2 : props.itemHeight / 2,
	} : {
		width: parseInt(props.currentProj.width, 10),
		height: (props.itemHeight === undefined) ? parseInt(props.currentProj.height, 10) : props.itemHeight
	};

	return (
		<motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}
			itemScope itemType="http://schema.org/SoftwareApplication" className="project">
			<meta itemProp="image" content={props.currentProj.cardImage} />
			<meta itemProp="downloadUrl" content={props.currentProj.sourceURL} />
			<LazyLoad height={cardSize.height}>
				<Card onClick={onToggle} className="project-card"
					  style={{ backgroundImage: `url(${props.currentProj.cardImage})`,
						  width: cardSize.width, height: cardSize.height}}>
					<CardActionArea className="project-card-action">
						<Typography itemProp="name" variant="caption" align="center" paragraph component="p"
							style={{ fontSize: isTabletOrMobile ? 14 : 20, height: cardSize.height / 3 }}>
							{props.currentProj.title}
						</Typography>
					</CardActionArea>
				</Card>
			</LazyLoad>
		</motion.div>
	);
};

export default memo(Project);
