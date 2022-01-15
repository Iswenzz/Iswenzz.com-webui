import {FC, memo, useCallback, useMemo, useState} from "react";
import { useSelector } from "react-redux";
import { useWindowSize } from "react-use";
import {useTranslation} from "react-i18next";
import axios from "axios";
import MarkdownIt from "markdown-it";
import { v4 as uuidv4 } from "uuid";
import hljs from "highlight.js";

import { DialogContent, Fab, Grid, Modal, Fade, Backdrop, Tooltip, 
	DialogTitle, CircularProgress, useTheme } from "@mui/material";
import { Close, Lock } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOsi } from "@fortawesome/free-brands-svg-icons";

import { ProjectSource } from "Home/components/Project/Project";
import { ViewPager, ViewPagerConfig, Image } from "Components";
import usePortrait from "utils/hooks/usePortrait";
import useTabletOrMobile from "utils/hooks/useTabletOrMobile";
import VS2015 from "App/components/Highlight/VS2015";
import AtomOneLight from "App/components/Highlight/AtomOneLight";
import { getProjects, getProjectsStartIndex } from "Home/redux";

import scss from "./ProjectPopup.module.scss";

export type ProjectPopupState = {
	projects: JSX.Element[]
};

/**
 * Modal container that shows all projects markdown in a ViewPager.
 */
export const ProjectPopup: FC = (): JSX.Element =>
{
	const { t } = useTranslation();
	const { isDarkTheme } = useTheme();

	const projects = useSelector(getProjects);
	const projectsStartIndex = useSelector(getProjectsStartIndex);
	// const dispatch = useDispatch();
	
	const [state, setState] = useState<ProjectPopupState>({
		projects: new Array(projects.length).fill("")
	});
	
	const isPortrait = usePortrait();
	const isTabletOrMobile = useTabletOrMobile();
	const { width, height } = useWindowSize();

	const projectModalActive = false;

	/**
	 * Viewpager resolution / position.
	 */
	const viewPagerConfig = useMemo<ViewPagerConfig>(() =>
	{
		const responsiveRes = {
			height: height / 1.3,
			width: width / 1.5,
		};
		if (isPortrait || isTabletOrMobile) return {
			height: height / 1.2,
			width: width,
			maxWidth: "100vw",
			maxHeight: "80vh"
		};
		else return {
			height: responsiveRes.height,
			width: responsiveRes.width,
			top: (height / 2) - responsiveRes.height / 2,
			right: (width / 2) - responsiveRes.width / 2,
			maxWidth: "100vw",
			maxHeight: "80vh"
		};
	}, [height, isPortrait, isTabletOrMobile, width]);

	/**
	 * Modal close handler
	 */
	const onClickClose = useCallback(() => 
	{
		// dispatch(toggleProjectModalActive(false));
		// dispatch(toggleModalActive(false));
	}, []);

	/**
	 * Render a single project JSX.Element.
	 * @param project - Project to render.
	 * @param i - Project index.
	 */
	const renderProject = useCallback(async (project: ProjectSource): Promise<JSX.Element> =>
	{
		let text = "";
		try
		{
			if (project.renderUrl)
			{
				const response = await axios.get<string>(project.renderUrl);
				text = response.data;
			}
		}
		catch (e)
		{
			text = t("PROJECT_WIP");
		}

		// convert markdown to html
		const markdown: MarkdownIt = MarkdownIt({
			html:         true,
			xhtmlOut:     false,
			breaks:       false,
			langPrefix:   "language-",
			linkify:      true,
			typographer:  false,
			highlight: function (str: string, lang: string)
			{
				if (lang && hljs.getLanguage(lang))
				{
					try 
					{
						return "<pre class=\"hljs\"><code>"
							+ hljs.highlight(lang, str, true).value
							+ "</code></pre>";
					}
					catch (_) { }
				}
				return "<pre class=\"hljs\"><code>" + markdown.utils.escapeHtml(str) + "</code></pre>";
			}
		});
		const markdownHTML = markdown.render(text);

		const openSource: JSX.Element = (
			<Tooltip arrow disableFocusListener disableTouchListener title={t("PROJECT_TOOLTIP_SOURCE") as string}>
				<Fab size={isPortrait || isTabletOrMobile ? "small" : "large"} href={project.sourceURL} 
					className={scss.tooltipFab} color="primary">
					<FontAwesomeIcon color="silver" icon={faOsi} size="2x" />
				</Fab>
			</Tooltip>
		);

		const privateSource: JSX.Element = (
			<Tooltip arrow disableFocusListener disableTouchListener title={t("PROJECT_TOOLTIP_CLOSED_SOURCE") as string}>
				<span>
					<Fab size={isPortrait || isTabletOrMobile ? "small" : "large"} disabled 
						className={scss.tooltipFab} color="primary">
						<Lock />
					</Fab>
				</span>
			</Tooltip>
		);
		
		return (
			<article key={uuidv4()}>
				{/* Modal Navbar */}
				<header>
					<DialogTitle className={scss.modalTitle}>
						<Grid className={scss.title} container
							justifyContent="space-between" alignItems="center">
							<ul className={scss.icons}>
								{project.renderIcons?.map(icon => (
									<li key={uuidv4()}>
										<Tooltip arrow disableFocusListener disableTouchListener title={icon.name}>
											<Image onDragStart={(e) => e.preventDefault()}
												 width={isPortrait || isTabletOrMobile ? "42px" : "64px"}
												 height={isPortrait || isTabletOrMobile ? "42px" : "64px"}
												 alt="" src={icon.src} />
										</Tooltip>
									</li>
								))}
							</ul>
							<div>
								{project.isOpenSource ? openSource : privateSource}
								<Fab id="fab_modal_close" onClick={onClickClose} 
									size={isPortrait || isTabletOrMobile ? "small" : "large"} 
									className={scss.tooltipFab} color="secondary">
									<Close color="primary" />
								</Fab>
							</div>
						</Grid> 
					</DialogTitle>
				</header>

				{/* Modal Content */}
				<section>
					<DialogContent onMouseDown={e => e.stopPropagation()} 
						onTouchStart={e => e.stopPropagation()} className={scss.modal}>
						<header>
							{project.title}
						</header>
						<section className={scss.markdown}>
							<article dangerouslySetInnerHTML={{ __html: markdownHTML }} />
						</section>
					</DialogContent>
				</section>
			</article>
		);
	}, [isPortrait, isTabletOrMobile, onClickClose, t]);

	/**
	 * On ViewPager index change.
	 * Load the right project.
	 * @param index - The ViewPager index.
	 */
	const onIndexChange = (index: number): void =>
	{
		// Loader
		const updatedProjects = state.projects;
		updatedProjects[index] = (
			<section className={scss.loader}>
				<CircularProgress color={"secondary"} />
			</section>
		);
		setState({
			projects: updatedProjects
		});

		// Render the page
		renderProject(projects[index]).then((page: JSX.Element) =>
		{
			updatedProjects[index] = page;
			setState({
				projects: updatedProjects
			});
		});
	};

	const viewPager = (
		<ViewPager background={isDarkTheme ? "#202326" : "#f4f4f4"}
			startIndex={projectsStartIndex} config={{...viewPagerConfig}}
			items={state.projects} onIndexChange={onIndexChange} />
	);

	return (
		<Modal aria-labelledby="projectpopup-modal" aria-describedby="viewpager-project" 
			open={projectModalActive} keepMounted onClose={onClickClose} closeAfterTransition 
			BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
			<Fade in={projectModalActive}>
				<section>
					<Tooltip open={projectModalActive} placement="right" arrow disableFocusListener 
						disableTouchListener title={t("PROJECT_TOOLTIP_DRAG") as string}>
						<img onDragStart={(e) => e.preventDefault()} className={scss.tooltipDrag} alt="drag"
							 src={require("assets/images/misc/icons8-hand-drag-64.png")} />
					</Tooltip>
					{projectModalActive ? 
						isDarkTheme ? <VS2015>{viewPager}</VS2015> : <AtomOneLight>{viewPager}</AtomOneLight>
						: null}
				</section>
			</Fade>
		</Modal>
	);
};

export default memo(ProjectPopup);
