import { FC, Fragment, memo } from "react";
import { batch, useDispatch, useSelector } from "react-redux";
import { useList, useWindowSize } from "react-use";
import { Dialog, Fade, Portal } from "@mui/material";

import { setModalActive, setNavbarActive } from "App/redux";
import { getProjectModalOpen, getProjectModalStartIndex, setProjectModalOpen } from "Home/redux";
import { HintDrag, ViewPager, ViewPagerConfig } from "components";
import useThemeMode from "utils/hooks/useThemeMode";
import useResponsive from "utils/hooks/useResponsive";

import { ProjectSource } from "../Project/Project";
import ProjectRender from "../ProjectRender/ProjectRender";

import scss from "./ProjectPopup.module.scss";

/**
 * Modal container that shows all projects markdown in a ViewPager.
 */
export const ProjectPopup: FC<ProjectPopupProps> = ({ projects }) =>
{
	const dispatch = useDispatch();
	const startIndex = useSelector(getProjectModalStartIndex);
	const openModal = useSelector(getProjectModalOpen);

	const { isDarkTheme } = useThemeMode({});
	const { width, height } = useWindowSize();

	const [fetchedProjects, { updateAt }] = useList(new Array<JSX.Element>(projects.length).fill(<></>));

	const viewPagerConfig = useResponsive<ViewPagerConfig>({
		desktopAndPortrait: {
			height: (height / 1.3),
			width: (width / 1.5),
			top: (height / 2) - (height / 1.3) / 2,
			right: (width / 2) - (width / 1.5) / 2,
			maxWidth: "100vw",
			maxHeight: "80vh"
		},
		mobile: {
			height: height,
			width: width,
			top: (height / 2) - (height / 1.3) / 2,
			right: (width / 2) - width / 2,
			maxWidth: "100vw",
			maxHeight: "80vh"
		}
	});

	/**
	 * Modal close handler.
	 */
	const onClose = () =>
	{
		batch(() =>
		{
			dispatch(setProjectModalOpen(false));
			dispatch(setNavbarActive(true));
			dispatch(setModalActive(false));
		});
	};

	/**
	 * Render the right project on ViewPager index change.
	 * @param index - The ViewPager index.
	 */
	const onIndexChange = (index: number) =>
	{
		if (fetchedProjects[index].type === Fragment)
			updateAt(index, <ProjectRender project={projects[index]} handleClose={onClose} />);
	};

	return (
		<Dialog aria-labelledby="projectpopup-modal" open={openModal} onClose={onClose}>
			<Fade in={openModal}>
				<section>
					<ViewPager background={isDarkTheme ? "#202326" : "#f4f4f4"}
						startIndex={startIndex} config={viewPagerConfig} onIndexChange={onIndexChange}
						items={fetchedProjects} />
					<Portal>
						<HintDrag className={scss.tooltipDrag} open={openModal} />
					</Portal>
				</section>
			</Fade>
		</Dialog>
	);
};

type ProjectPopupProps = {
	projects: ProjectSource[]
};

export default memo(ProjectPopup);
