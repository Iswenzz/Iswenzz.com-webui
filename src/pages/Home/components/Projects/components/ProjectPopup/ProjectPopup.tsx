import { FC, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useList, useWindowSize } from "react-use";
import { Dialog, Fade } from "@mui/material";

import {
	HintDrag,
	ViewPager,
	ViewPagerConfig,
	useThemeMode,
	useResponsive,
	Portal
} from "@izui/react";

import { setModalActive, setNavbarActive } from "App/redux";

import {
	getProjectModalOpen,
	getProjectModalIndex as getProjectModalIndex,
	setProjectModalOpen
} from "Home/redux";

import { ProjectSource } from "../Project/Project";
import ProjectRender from "../ProjectRender/ProjectRender";

import scss from "./ProjectPopup.module.scss";

/**
 * Modal container that shows all projects markdown in a ViewPager.
 */
const ProjectPopup: FC<ProjectPopupProps> = ({ projects }) => {
	const dispatch = useDispatch();
	const index = useSelector(getProjectModalIndex);
	const open = useSelector(getProjectModalOpen);

	const { isDark } = useThemeMode({});
	const { width, height } = useWindowSize();

	const [list, { updateAt }] = useList(new Array(projects.length).fill(<Fragment />));

	const viewPagerConfig = useResponsive<ViewPagerConfig>({
		desktopAndPortrait: {
			height: height / 1.3,
			width: width / 1.5,
			top: height / 2 - height / 1.3 / 2,
			right: width / 2 - width / 1.5 / 2,
			maxWidth: "100vw",
			maxHeight: "80vh"
		},
		mobile: {
			height: height,
			width: width,
			top: height / 2 - height / 1.3 / 2,
			right: width / 2 - width / 2,
			maxWidth: "100vw",
			maxHeight: "80vh"
		}
	});

	const onClose = () => {
		dispatch(setProjectModalOpen(false));
		dispatch(setNavbarActive(true));
		dispatch(setModalActive(false));
	};

	const onIndexChange = (index: number) => {
		if (list[index].type === Fragment)
			updateAt(index, <ProjectRender project={projects[index]} handleClose={onClose} />);
	};

	return (
		<Dialog aria-labelledby="projectpopup-modal" open={open} onClose={onClose}>
			<Fade in={open}>
				<section>
					<ViewPager
						background={isDark ? "#202326" : "#f4f4f4"}
						index={index}
						config={viewPagerConfig}
						onChange={onIndexChange}
						items={list}
					/>
					<Portal>
						<HintDrag className={scss.tooltipDrag} open={open} />
					</Portal>
				</section>
			</Fade>
		</Dialog>
	);
};

type ProjectPopupProps = {
	projects: ProjectSource[];
};

export default ProjectPopup;
