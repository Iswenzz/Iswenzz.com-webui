import * as actions from '../../containers/Home/store/actions';
import React, { FunctionComponent, useEffect, useState } from "react";
import { Dialog, DialogContent, Slide, Fab, Grid, Container } from "@material-ui/core";
import { TransitionProps } from "@material-ui/core/transitions/transition";
import { Close, Lock } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faOsi } from '@fortawesome/free-brands-svg-icons';
import { LinkedProjectProps } from "../Project/Project";
import ViewPager from '../../components/ViewPager/ViewPager';
import { AppState } from "../..";
import marked from "marked";
import { useSelector, useDispatch } from "react-redux";
import Slider from "react-slick";
import './ProjectPopup.scss';
import Spacing from '../Spacing/Spacing';
import RadialGradient from '../RadialGradient/RadialGradient';

export interface ProjectPopupProps
{
	projects: LinkedProjectProps[],
	children?: any
}

const Transition = React.forwardRef<unknown, TransitionProps>(function Transition(props, ref) {
	return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectPopup: FunctionComponent<ProjectPopupProps> = (props: ProjectPopupProps): JSX.Element =>
{
	const projectModalActive = useSelector((state: AppState) => state.home.projectModalActive);
	const dispatch = useDispatch();

	const onClickClose = (): void => 
    {
        dispatch(actions.toggleProjectModal(false));
    }

	return (
		<Dialog maxWidth='xl' open={projectModalActive} TransitionComponent={Transition} 
		keepMounted onClose={onClickClose} aria-labelledby="alert-dialog-slide-title" 
		aria-describedby="alert-dialog-slide-description">
			<ViewPager width='1100px' height='600px' items={props.projects.map((proj: LinkedProjectProps, i: number) => 
			{
				const openSource: JSX.Element = (
					<Fab href={proj.sourceURL} style={{ margin: '0 8px 0 8px'}} color="primary" aria-label="add">
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
						<Grid container className="project-title" direction="row" justify="space-between" alignItems="center">
							<div className='project-icons'>
								{proj.renderIcons!.map(icon => (
									<img onDragStart={(e) => e.preventDefault()} 
									style={{ margin: '0 4px 0 4px' }} width='64' height='64' alt='lang' src={icon} />
								))}
							</div>
							<div>
								{proj.isOpenSource ? openSource : privateSource}
								<Fab onClick={onClickClose} style={{ margin: '0 8px 0 8px'}} 
								color="primary" aria-label="add">
									<Close />
								</Fab>
							</div>
						</Grid>
		
						{/* Modal Content */}
						<RadialGradient position='ellipse at bottom' colors={[
						{ color: '#323536', colorPercent: '0%' },
						{ color: '#23272a', colorPercent: '100%' }]}>
							<DialogContent className='project-modal'>
								{proj.showTitle ? proj.title : null}
								{proj.desc}
								<section>
									<article dangerouslySetInnerHTML={{__html: marked(proj.renderFile!)}} />
								</section>
								{props.children}
							</DialogContent>
						</RadialGradient>
					</div>
				);
			})} />
		</Dialog>
	);
}

export default ProjectPopup;