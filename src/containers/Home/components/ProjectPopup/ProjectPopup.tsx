// import {FC, memo, useCallback, useMemo, useState} from "react";
// import {
// 	DialogContent,
// 	Fab,
// 	Grid,
// 	Modal,
// 	Fade,
// 	Backdrop,
// 	Tooltip,
// 	DialogTitle,
// 	CircularProgress
// } from "@material-ui/core";
// import { Close, Lock } from "@material-ui/icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faOsi } from "@fortawesome/free-brands-svg-icons";
// import { LinkedProjectProps } from "Home/components/Project/Project";
// import ViewPager, { ViewPagerConfig } from "Components/ViewPager/ViewPager";
// import { AppState } from "App";
// import useWindowSize from "utils/hooks/useWindowSize";
// import { useSelector, useDispatch } from "react-redux";
// import { useMediaQuery } from "react-responsive";
// import MarkdownIt from "markdown-it";
// import { v4 as uuidv4 } from "uuid";
// import VS2015 from "App/components/Highlight/VS1025";
// import AtomOneLight from "App/components/Highlight/AtomOneLight";
// import {useTranslation} from "react-i18next";
// import LazyImage from "Components/LazyImage/LazyImage";
// import axios, {AxiosResponse} from "axios";
// import hljs from "highlight.js";
// import "./ProjectPopup.scss";
// // import { toggleProjectModalActive } from "Home/redux";
// // import { toggleModalActive } from "App/redux";

// export type ProjectPopupState = {
// 	projects: JSX.Element[]
// };

// /**
//  * Modal container that shows all projects markdown in a ViewPager.
//  */
// export const ProjectPopup: FC = (): JSX.Element =>
// {
// 	const { t } = useTranslation();
// 	// const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);
// 	// const projects = useSelector((state: AppState) => state.home.projects);
// 	// const projectsStartIndex = useSelector((state: AppState) => state.home.projectsStartIndex);
// 	// const projectModalActive = useSelector((state: AppState) => state.home.projectModalActive);
// 	const dispatch = useDispatch();
// 	const [state, setState] = useState<ProjectPopupState>({
// 		projects: new Array(projects.length).fill("")
// 	});

// 	const isPortrait = useMediaQuery({ orientation: "portrait" });
// 	const isTabletOrMobileDevice = useMediaQuery({ query: "(max-device-width: 1224px)" });
// 	const [width, height] = useWindowSize();

// 	/**
// 	 * Viewpager resolution / position.
// 	 */
// 	const viewPagerConfig = useMemo<ViewPagerConfig>(() =>
// 	{
// 		const responsiveRes = {
// 			height: height / 1.3,
// 			width: width / 1.5,
// 		};
// 		if (isPortrait || isTabletOrMobileDevice) return {
// 			height: height / 1.2,
// 			width: width,
// 			maxWidth: "100vw",
// 			maxHeight: "80vh"
// 		};
// 		else return {
// 			height: responsiveRes.height,
// 			width: responsiveRes.width,
// 			top: (height / 2) - responsiveRes.height / 2,
// 			right: (width / 2) - responsiveRes.width / 2,
// 			maxWidth: "100vw",
// 			maxHeight: "80vh"
// 		};
// 	}, [height, isPortrait, isTabletOrMobileDevice, width]);

// 	/**
// 	 * Modal close handler
// 	 */
// 	const onClickClose = useCallback(() => 
// 	{
// 		// dispatch(toggleProjectModalActive(false));
// 		// dispatch(toggleModalActive(false));
// 	}, [dispatch]);

// 	/**
// 	 * Render a single project JSX.Element.
// 	 * @param project - Project to render.
// 	 * @param i - Project index.
// 	 */
// 	const renderProject = useCallback(async (project: LinkedProjectProps): Promise<JSX.Element> =>
// 	{
// 		let text: string;
// 		try
// 		{
// 			const res: AxiosResponse<string> = await axios.get(project.renderUrl!);
// 			text = res.data;
// 		}
// 		catch (e)
// 		{
// 			text = t("PROJECT_WIP");
// 		}

// 		// convert markdown to html
// 		const md: MarkdownIt = MarkdownIt({
// 			html:         true,
// 			xhtmlOut:     false,
// 			breaks:       false,
// 			langPrefix:   "language-",
// 			linkify:      true,
// 			typographer:  false,
// 			highlight: function (str: string, lang: string)
// 			{
// 				if (lang && hljs.getLanguage(lang))
// 				{
// 					try 
// 					{
// 						return "<pre class=\"hljs\"><code>"
// 							+ hljs.highlight(lang, str, true).value
// 							+ "</code></pre>";
// 					}
// 					catch (_) { }
// 				}
// 				return "<pre class=\"hljs\"><code>" + md.utils.escapeHtml(str) + "</code></pre>";
// 			}
// 		});
// 		const markdownHTML = md.render(text);

// 		const openSource: JSX.Element = (
// 			<Tooltip arrow disableFocusListener disableTouchListener title={t("PROJECT_TOOLTIP_SOURCE") as string}>
// 				<Fab size={isPortrait || isTabletOrMobileDevice ? "small" : "large"} href={project.sourceURL} 
// 					className="projectpopup-tooltip-fab" color="primary">
// 					<FontAwesomeIcon color='silver' icon={faOsi} size='2x' />
// 				</Fab>
// 			</Tooltip>
// 		);

// 		const privateSource: JSX.Element = (
// 			<Tooltip arrow disableFocusListener disableTouchListener title={t("PROJECT_TOOLTIP_CLOSED_SOURCE") as string}>
// 				<span>
// 					<Fab size={isPortrait || isTabletOrMobileDevice ? "small" : "large"} disabled 
// 						className="projectpopup-tooltip-fab" color="primary">
// 						<Lock />
// 					</Fab>
// 				</span>
// 			</Tooltip>
// 		);
		
// 		return (
// 			<article key={uuidv4()}>
// 				{/* Modal Navbar */}
// 				<header>
// 					<DialogTitle disableTypography className="projectpopup-modal-title">
// 						<Grid className="projectpopup-title" container
// 							direction="row" justifyContent="space-between" alignItems="center">
// 							<ul className='projectpopup-icons'>
// 								{project.renderIcons!.map(icon => (
// 									<li key={uuidv4()}>
// 										<Tooltip arrow disableFocusListener disableTouchListener title={icon.name}>
// 											<LazyImage onDragStart={(e) => e.preventDefault()}
// 												 width={isPortrait || isTabletOrMobileDevice ? "42px" : "64px"}
// 												 height={isPortrait || isTabletOrMobileDevice ? "42px" : "64px"}
// 												 alt="" src={icon.src} />
// 										</Tooltip>
// 									</li>
// 								))}
// 							</ul>
// 							<div>
// 								{project.isOpenSource ? openSource : privateSource}
// 								<Fab id="fab_modal_close" onClick={onClickClose} 
// 									size={isPortrait || isTabletOrMobileDevice ? "small" : "large"} 
// 									className="projectpopup-tooltip-fab" color="secondary">
// 									<Close color="primary" />
// 								</Fab>
// 							</div>
// 						</Grid> 
// 					</DialogTitle>
// 				</header>

// 				{/* Modal Content */}
// 				<section>
// 					<DialogContent onMouseDown={e => e.stopPropagation()} 
// 						onTouchStart={e => e.stopPropagation()} className='projectpopup-modal'>
// 						<header>
// 							{project.showTitle ? project.title : null}
// 							{project.desc}
// 						</header>
// 						<section className="projectpopup-md">
// 							<article dangerouslySetInnerHTML={{ __html: markdownHTML }} />
// 						</section>
// 					</DialogContent>
// 				</section>
// 			</article>
// 		);
// 	}, [isPortrait, isTabletOrMobileDevice, onClickClose, t]);

// 	/**
// 	 * On ViewPager index change.
// 	 * Load the right project.
// 	 * @param index - The ViewPager index.
// 	 */
// 	const onIndexChange = (index: number): void =>
// 	{
// 		// Loader
// 		const updatedProjects = state.projects;
// 		updatedProjects[index] = (
// 			<section className={"projectpopup-loader"}>
// 				<CircularProgress color={"secondary"} />
// 			</section>
// 		);
// 		setState({
// 			projects: updatedProjects
// 		});

// 		// Render the page
// 		renderProject(projects[index]).then((page: JSX.Element) =>
// 		{
// 			updatedProjects[index] = page;
// 			setState({
// 				projects: updatedProjects
// 			});
// 		});
// 	};

// 	const viewPager = (
// 		<ViewPager bgcolor={isDarkMode ? "#202326" : "#f4f4f4"}
// 			startIndex={projectsStartIndex} config={{...viewPagerConfig}}
// 			items={state.projects} onIndexChange={onIndexChange} />
// 	);

// 	return (
// 		<Modal aria-labelledby="projectpopup-modal" aria-describedby="viewpager-project" 
// 			open={projectModalActive} keepMounted onClose={onClickClose} closeAfterTransition 
// 			BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
// 			<Fade in={projectModalActive}>
// 				<section className="projectpopup">
// 					<Tooltip open={projectModalActive} placement="right" arrow disableFocusListener 
// 						disableTouchListener title={t("PROJECT_TOOLTIP_DRAG") as string}>
// 						<img onDragStart={(e) => e.preventDefault()} className="projectpopup-tooltip-drag" alt='drag'
// 							 src={require("assets/images/misc/icons8-hand-drag-64.png")} />
// 					</Tooltip>
// 					{projectModalActive ? 
// 						isDarkMode ? <VS2015>{viewPager}</VS2015> : <AtomOneLight>{viewPager}</AtomOneLight>
// 						: null}
// 				</section>
// 			</Fade>
// 		</Modal>
// 	);
// };

// export default memo(ProjectPopup);

// eslint-disable-next-line import/no-anonymous-default-export
export default () => <></>;
