import * as actions from '../../store/actions';
import React, { FunctionComponent, useEffect } from "react";
import { Dialog, DialogContent, Slide, Fab, Grid } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { Close, Lock } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOsi } from '@fortawesome/free-brands-svg-icons';
import { LinkedProjectProps } from "../Project/Project";
import ViewPager from '../../../../components/ViewPager/ViewPager';
import { AppState } from "../../../..";
import marked from "marked";
import { useSelector, useDispatch } from "react-redux";
import RadialGradient from '../../../../components/RadialGradient/RadialGradient';
import './ProjectPopup.scss';

export interface ProjectPopupProps
{
	projects: LinkedProjectProps[],
	children?: any
}

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) 
{
	return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectPopup: FunctionComponent<ProjectPopupProps> = (props: ProjectPopupProps): JSX.Element =>
{
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
			<Fab href={project.sourceURL} style={{ margin: '0 8px 0 8px'}} color="primary" aria-label="add">
				<FontAwesomeIcon icon={faOsi} size='2x' />
			</Fab>
		);

		const privateSource: JSX.Element = (
			<Fab style={{ margin: '0 8px 0 8px'}} color="primary" aria-label="add">
				<Lock />
			</Fab>
		);

		return (
			<div>
				{/* Modal Navbar */}
				<Grid container className="project-title" direction="row" justify="space-between" 
				alignItems="center">
					<div className='project-icons'>
						{project.renderIcons!.map(icon => (
							<img onDragStart={(e) => e.preventDefault()} 
							style={{ margin: '0 4px 0 4px' }} width='64' height='64' alt='lang' src={icon} />
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
				<RadialGradient position='ellipse at bottom' colors={[
				{ color: '#323536', colorPercent: '0%' },
				{ color: '#222428', colorPercent: '100%' }]}>
					<DialogContent className='project-modal'>
						{project.showTitle ? project.title : null}
						{project.desc}
						<div className='project-md' id={`popupProjectMd-${project.title}`} />
						{props.children}
					</DialogContent>
				</RadialGradient>
			</div>
		);
	}

	return (
		<Dialog maxWidth='xl' open={projectModalActive} TransitionComponent={Transition} 
		keepMounted onClose={onClickClose} aria-labelledby="alert-dialog-slide-title" 
		aria-describedby="alert-dialog-slide-description">
			<ViewPager startIndex={projectsStartIndex} width='1100px' height='600px' 
			items={props.projects.map((proj: LinkedProjectProps, i: number): JSX.Element => renderProject(proj, i))} />
		</Dialog>
	);
}

export default ProjectPopup;