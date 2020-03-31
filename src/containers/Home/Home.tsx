import * as actions from './store/actions';
import * as appActions from '../../store/actions';
import React, { FunctionComponent } from 'react';
import { AppState } from "../../application";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { connect, useSelector, useDispatch } from 'react-redux';
import NavBar from '../UI/NavBar/NavBar';
import Projects from './UI/Projects/Projects';
import Footer from '../UI/Footer/Footer';
import Intro from '../Home/UI/Intro/Intro';
import IntroSkill from '../Home/UI/Intro/IntroSkill';
import Contact from '../Home/UI/Contact/Contact';
import Levels from '../Home/UI/Levels/Levels';
import { HomeActions } from './store/types';
import { LinkedProjectProps } from './UI/Project/Project';
import { Parallax } from 'react-parallax';
import { Typography } from '@material-ui/core';
import SplitText from 'react-pose-text';
import Spacing from '../../components/Spacing/Spacing';
import VisibilitySensor from 'react-visibility-sensor';
import ProjectPopup from './UI/ProjectPopup/ProjectPopup';
import { Element } from 'react-scroll';
import '../../Text.scss';

const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }: any) => charIndex * 30
    }
};

const Home: FunctionComponent = (): JSX.Element =>
{
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);
    const isPastIntro = useSelector((state: AppState) => state.app.isPastIntro);

    return (
        <>
            {/* Header */}
            <Element name="header-section" />
            <NavBar style={{ background: 'rgba(50, 50, 60, 0.3)'}} />

            {/* About */}
            <VisibilitySensor partialVisibility>
            {({ isVisible }) => {
                if (isVisible === isPastIntro)
                    dispatch(appActions.togglePastIntro(!isPastIntro));
                return (
                    <Parallax style={{boxShadow: '0 0 5px 6px rgba(60, 60, 60, .3)'}} 
                    bgImage={require(`../../assets/images/index/${isDarkMode ? '20.jpg' : 'nature1.jpg'}`)} 
                    bgImageAlt="index" strength={400} blur={0}>
                        <Spacing height='70px' />
                        <Intro />
                        <Spacing height='300px' />
                    </Parallax>
                );
            }}
            </VisibilitySensor>
            <IntroSkill />

            {/* Projects */}
            <Parallax style={{boxShadow: '0 0 5px 6px rgba(60, 60, 60, .3)'}} 
            bgImage={require(`../../assets/images/index/projects.jpg`)} 
            bgImageAlt="index" strength={-200} blur={0}>
                <Spacing height='200px' />
                <Typography style={{ userSelect: 'none' }} align="center" variant="h1" component="h1">
                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                        Projects
                    </SplitText>
                </Typography>
                <Spacing height='200px' />
            </Parallax>
            <ProjectPopup />
            <Projects />

            {/* Levels */}
            <Parallax style={{boxShadow: '0 0 5px 6px rgba(60, 60, 60, .3)'}} 
            bgImage={require(`../../assets/images/index/leveldesign.jpg`)} 
            bgImageAlt="index" strength={-200} blur={0}>
                <Spacing height='200px' />
                <Typography style={{ userSelect: 'none' }} align="center" variant="h1" component="h1">
                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                        Level Design
                    </SplitText>
                </Typography>
                <Spacing height='200px' />
            </Parallax>
            <Levels />

            {/* Contact */}
            <Parallax style={{boxShadow: '0 0 5px 6px rgba(60, 60, 60, .3)'}} 
            bgImage={require(`../../assets/images/index/${isDarkMode ? '55.jpg' : 't1.jpg'}`)} 
            bgImageAlt="index" strength={200} blur={0}>
                <Spacing height='200px' />
                <Typography style={{ userSelect: 'none' }} align="center" variant="h1" component="h1">
                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                        Contact
                    </SplitText>
				</Typography>
                <Spacing height='200px' />
            </Parallax>
            <Contact />

            {/* Footer */}
            <Footer />
        </>
    );
}

interface LinkStateProps 
{
    projects: LinkedProjectProps[],
    projectsStartIndex: number,
    projectModalActive: boolean
}

interface LinkDispatchProps 
{
    setProjectsIndex: (index: number) => void,
    toggleProjectModalActive: (active: boolean) => void
}

export type ReduxHomeProps = LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppState, ownProps: any): LinkStateProps => 
({
    projects: state.home.projects,
    projectsStartIndex: state.home.projectsStartIndex,
    projectModalActive: state.home.projectModalActive
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, HomeActions>, ownProps: any): LinkDispatchProps => 
({
    setProjectsIndex: bindActionCreators(actions.setProjectsIndex, dispatch),
    toggleProjectModalActive: bindActionCreators(actions.toggleProjectModalActive, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);