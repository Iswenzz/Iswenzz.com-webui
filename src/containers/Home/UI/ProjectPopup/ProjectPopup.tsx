import * as actions from '../../store/actions';
import React, { FunctionComponent, useEffect, useRef } from "react";
import { DialogContent, Fab, Grid, Modal, Fade, Backdrop, Tooltip } from "@material-ui/core";
import { Close, Lock } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOsi } from '@fortawesome/free-brands-svg-icons';
import { LinkedProjectProps } from "../Project/Project";
import ViewPager, { ViewPagerConfig } from '../../../../components/ViewPager/ViewPager';
import { AppState } from "../../../..";
import marked from "marked";
import useWindowSize from '../../../../Utility/useWindowSize';
import { useSelector, useDispatch } from "react-redux";
import RadialGradient from '../../../../components/RadialGradient/RadialGradient';
import { useMediaQuery } from 'react-responsive';
import '../../../../Text.scss';
import './ProjectPopup.scss';

export interface ProjectPopupProps
{
	projects: LinkedProjectProps[],
	children?: any
}

const ProjectPopup: FunctionComponent<ProjectPopupProps> = (props: ProjectPopupProps): JSX.Element =>
{
	const isPortrait = useMediaQuery({ orientation: 'portrait' });
	const [width, height] = useWindowSize();
	const viewPagerRef = useRef<HTMLDivElement>(null);

	const projectModalActive = useSelector((state: AppState) => state.home.projectModalActive);
	const projectsStartIndex = useSelector((state: AppState) => state.home.projectsStartIndex);
	const dispatch = useDispatch();

	const onClickClose = (): void => 
    {
        dispatch(actions.toggleProjectModal(false));
	}
	
	useEffect(() => 
	{
		props.projects.map((project: LinkedProjectProps): void => 
		{
			fetch(project.renderUrl!).then(response => response.text()).then(text => 
			{
				// render md file in the right div
				let article = document.createElement("article");
				article.innerHTML = marked(text);
				let section = document.createElement("section");
				section.appendChild(article);
				let div = document.getElementById(`popupProjectMd-${project.title}`);
				div?.appendChild(section);
			});
		});
	}, []);

	const renderProject = (project: LinkedProjectProps, i: number): JSX.Element =>
	{
		const openSource: JSX.Element = (
			<Tooltip arrow disableFocusListener disableTouchListener title="View Source">
				<Fab href={project.sourceURL} style={{ margin: '0 8px 0 8px'}} color="primary" aria-label="add">
					<FontAwesomeIcon icon={faOsi} size='2x' />
				</Fab>
			</Tooltip>
		);

		const privateSource: JSX.Element = (
			<Tooltip arrow disableFocusListener disableTouchListener title="Private Source">
				<Fab disabled style={{ margin: '0 8px 0 8px'}} color="primary" aria-label="add">
					<Lock />
				</Fab>
			</Tooltip>
		);
		
		return (
			<div>
				{/* Modal Navbar */}
				<Grid container className="project-title" direction="row" justify="space-between" 
				alignItems="center">
					<div className='project-icons'>
						{project.renderIcons!.map(icon => (
							<Tooltip arrow disableFocusListener disableTouchListener title={icon.name}>
								<img onDragStart={(e) => e.preventDefault()} 
								style={{ margin: '0 4px 0 4px' }} width='64' height='64' alt='lang' src={icon.src} />
						  	</Tooltip>
						))}
					</div>
					<div>
						{project.isOpenSource ? openSource : privateSource}
						<Fab onClick={onClickClose} style={{ margin: '0 8px 0 8px'}} 
						color="primary" aria-label="add">
							<Close />
						</Fab>
					</div>
				</Grid> 

				{/* Modal Content */}
				<RadialGradient container position='ellipse at bottom' colors={[
				{ color: '#323536', colorPercent: '0%' },
				{ color: '#222428', colorPercent: '100%' }]}>
					<DialogContent className='project-modal'>
						{project.showTitle ? project.title : null}
						{project.desc}
						<div className="project-md" id={`popupProjectMd-${project.title}`} /> 
						{props.children}
					</DialogContent>
				</RadialGradient>
			</div>
		);
	}

	const getConfig = (): ViewPagerConfig => 
	{
		const responsiveRes = {
			height: height / 1.3,
			width: width / 1.5
		}
		if (isPortrait) return {
			height: height,
			width: width,
		}
		else return {
			height: responsiveRes.height,
			width: responsiveRes.width,
			top: (height / 2) - responsiveRes.height / 2,
			right: (width / 2) - responsiveRes.width / 2
		}
	}

	return (
		<Modal aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description" open={projectModalActive} 
		keepMounted onClose={onClickClose} closeAfterTransition BackdropComponent={Backdrop} 
		BackdropProps={{ timeout: 500 }}>
			<Fade in={projectModalActive}>
				<ViewPager bgcolor='#202326' ref={viewPagerRef} startIndex={projectsStartIndex} config={{...getConfig()}}
				items={props.projects.map((proj: LinkedProjectProps, i: number): JSX.Element => renderProject(proj, i))} />
			</Fade>
		</Modal>
	);
}

export default ProjectPopup;