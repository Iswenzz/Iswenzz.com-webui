import * as actions from "store/actions";
import * as homeActions from "containers/Home/store/actions";
import React, { FunctionComponent, memo, useState} from "react";
import { DialogContent, Fab, Grid, Modal, Fade, Backdrop, Tooltip, DialogTitle } from "@material-ui/core";
import { Close, Lock } from "@material-ui/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faOsi } from "@fortawesome/free-brands-svg-icons";
import { LinkedProjectProps } from "containers/Home/UI/Project/Project";
import ViewPager, { ViewPagerConfig } from "components/ViewPager/ViewPager";
import { AppState } from "application";
import useWindowSize from "utility/useWindowSize";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import * as MarkdownIt from "markdown-it";
import uuid from "uuid";
import VS2015 from "containers/UI/Highlight/VS1025";
import AtomOneLight from "containers/UI/Highlight/AtomOneLight";
import "Common.scss";
import "./ProjectPopup.scss";

const hljs = require("highlight.js");

export interface ProjectPopupState
{
	projectsLength: number,
	projects: JSX.Element[] | null,
	isDarkMode: boolean,
	isPortrait: boolean,
	isTabletOrMobileDevice: boolean
}

/**
 * Modal container that shows all projects markdown in a ViewPager.
 */
export const ProjectPopup: FunctionComponent = (): JSX.Element =>
{
	const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);
	const projects = useSelector((state: AppState) => state.home.projects);
	const projectsStartIndex = useSelector((state: AppState) => state.home.projectsStartIndex);
	const projectModalActive = useSelector((state: AppState) => state.home.projectModalActive);
	const dispatch = useDispatch();

	const isPortrait = useMediaQuery({ orientation: "portrait" });
	const isTabletOrMobileDevice = useMediaQuery({ query: "(max-device-width: 1224px)" });
	const [width, height] = useWindowSize();

	const [renderedProj, setRenderedProject] = useState<ProjectPopupState>({
		projectsLength: 0,
		projects: null,
		isDarkMode: isDarkMode,
		isPortrait: isPortrait,
		isTabletOrMobileDevice: isTabletOrMobileDevice
	});

	/**
	 * Modal close handler
	 */
	const onClickClose = (): void => 
	{
		dispatch(homeActions.toggleProjectModalActive(false));
		dispatch(actions.toggleModalActive(false));
	};

	/**
	 * Fetch all markdown files and parse them using MarkdownIt
	 * and highlight code snipet with HighlightJS.
	 */
	const renderMds = (): void =>
	{
		projects.map((project: LinkedProjectProps): Promise<void> =>
			fetch(project.renderUrl!).then(response => response.text()).then(text => 
			{
				let div = document.getElementById(`popupProjectMd-${project.title}`);
				if (!div?.childElementCount)
				{
					if (text.includes("404: Not Found"))
						text = "Work in progress...";

					// convert markdown to html
					let md: MarkdownIt = MarkdownIt.default({
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
								try {
									return "<pre class=\"hljs\"><code>"
										+ hljs.highlight(lang, str, true).value 
										+ "</code></pre>";
								} catch (__) { }
							}
							return "<pre class=\"hljs\"><code>" + md.utils.escapeHtml(str) + "</code></pre>";
						}
					});

					// render md file in the right div
					let article = document.createElement("article");
					article.innerHTML = md.render(text);
					let section = document.createElement("section");
					section.appendChild(article);
					div?.appendChild(section);
				}
			})
		);
	};

	/**
	 * Render a single project JSX.Element.
	 * @param project - Project to render.
	 * @param i - Project index.
	 */
	const renderProject = (project: LinkedProjectProps, i: number): JSX.Element =>
	{
		const openSource: JSX.Element = (
			<Tooltip arrow disableFocusListener disableTouchListener title="View Source">
				<Fab size={isPortrait || isTabletOrMobileDevice ? "small" : "large"} href={project.sourceURL} 
					className="projectpopup-tooltip-fab" color="primary">
					<FontAwesomeIcon color='silver' icon={faOsi} size='2x' />
				</Fab>
			</Tooltip>
		);

		const privateSource: JSX.Element = (
			<Tooltip arrow disableFocusListener disableTouchListener title="Private Source">
				<span>
					<Fab size={isPortrait || isTabletOrMobileDevice ? "small" : "large"} disabled 
						className="projectpopup-tooltip-fab" color="primary">
						<Lock />
					</Fab>
				</span>
			</Tooltip>
		);
		
		return (
			<article key={uuid.v4()}>
				{/* Modal Navbar */}
				<header>
					<DialogTitle disableTypography className="projectpopup-modal-title">
						<Grid className="projectpopup-title" container
							direction="row" justify="space-between" alignItems="center">
							<ul className='projectpopup-icons'>
								{project.renderIcons!.map(icon => (
									<li key={uuid.v4()}>
										<Tooltip arrow disableFocusListener disableTouchListener title={icon.name}>
											<img onDragStart={(e) => e.preventDefault()} 
												width={isPortrait || isTabletOrMobileDevice ? "42px" : "64px"} 
												height={isPortrait || isTabletOrMobileDevice ? "42px" : "64px"} 
												alt='lang' src={icon.src} />
										</Tooltip>
									</li>
								))}
							</ul>
							<div>
								{project.isOpenSource ? openSource : privateSource}
								<Fab id="fab_modal_close" onClick={onClickClose} 
									size={isPortrait || isTabletOrMobileDevice ? "small" : "large"} 
									className="projectpopup-tooltip-fab" color="secondary">
									<Close color="primary" />
								</Fab>
							</div>
						</Grid> 
					</DialogTitle>
				</header>

				{/* Modal Content */}
				<section>
					<DialogContent onMouseDown={e => e.stopPropagation()} 
						onTouchStart={e => e.stopPropagation()} className='projectpopup-modal'>
						<header>
							{project.showTitle ? project.title : null}
							{project.desc}
						</header>
						<article className="projectpopup-md" id={`popupProjectMd-${project.title}`} /> 
					</DialogContent>
				</section>
			</article>
		);
	};

	/**
	 * Set viewpager resolution / position.
	 */
	const getConfig = (): ViewPagerConfig => 
	{
		const responsiveRes = {
			height: height / 1.3,
			width: width / 1.5,
		};
		if (isPortrait || isTabletOrMobileDevice) return {
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
	};

	/**
	 * Rerender the projects when projects/isDarkMode state changes.
	 */
	const shouldRenderProjects = (): void =>
	{
		if (projects.length !== renderedProj.projectsLength
			|| isDarkMode !== renderedProj.isDarkMode
			|| isPortrait !== renderedProj.isPortrait
			|| isTabletOrMobileDevice !== renderedProj.isTabletOrMobileDevice)
		{
			let p: JSX.Element[] = projects?.map(
				(proj: LinkedProjectProps, i: number): JSX.Element => renderProject(proj, i));
			setRenderedProject({
				projectsLength: p.length,
				projects: p,
				isDarkMode: isDarkMode,
				isPortrait: isPortrait,
				isTabletOrMobileDevice: isTabletOrMobileDevice
			});
		}
	};

	/**
	 * Get the view pager component when modal is open, 
	 * check if projects need to be rerendered and request mds.
	 */
	const getViewPager = (): JSX.Element =>
	{
		renderMds();
		shouldRenderProjects();
		return (
			<ViewPager bgcolor={isDarkMode ? "#202326" : "#f4f4f4"} 
				startIndex={projectsStartIndex} config={{...getConfig()}}
				items={renderedProj.projects!} />
		);
	};

	return (
		<Modal aria-labelledby="projectpopup-modal" aria-describedby="viewpager-project" 
			open={projectModalActive} keepMounted onClose={onClickClose} closeAfterTransition 
			BackdropComponent={Backdrop} BackdropProps={{ timeout: 500 }}>
			<Fade in={projectModalActive}>
				<section className="projectpopup">
					<Tooltip open={projectModalActive} placement="right" arrow disableFocusListener 
						disableTouchListener title="Drag the window!">
						<img onDragStart={(e) => e.preventDefault()} className="projectpopup-tooltip-drag" alt='drag'
							src={require("assets/images/misc/icons8-hand-drag-64.png")} />
					</Tooltip>
					{projectModalActive ? 
						isDarkMode ? <VS2015>{getViewPager()}</VS2015> : <AtomOneLight>{getViewPager()}</AtomOneLight>
						: null}
				</section>
			</Fade>
		</Modal>
	);
};

export default memo(ProjectPopup);