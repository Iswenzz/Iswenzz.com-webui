import * as actions from './store/actions';
import React, { FunctionComponent } from 'react';
import { AppState } from "../..";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { connect, useSelector } from 'react-redux';

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
    const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);

    return (
        <>
            <NavBar />
            <Parallax style={{paddingTop: '70px', paddingBottom: '300px', boxShadow: '0 0 5px 6px rgba(60, 60, 60, .3)'}} 
            bgImage={require(`../../assets/images/index/${isDarkMode ? '20.jpg' : 'nature1.jpg'}`)} 
            bgImageAlt="index" strength={400} blur={0}>
                <Intro />
            </Parallax>
            <IntroSkill /> 

            <Parallax style={{boxShadow: '0 0 5px 6px rgba(60, 60, 60, .3)'}} 
            bgImage={require(`../../assets/images/index/${isDarkMode ? '4.jpg' : '2.jpg'}`)} 
            bgImageAlt="index" strength={-200} blur={0}>
                <Spacing height='200px' />
                <Typography align="center" variant="h1" component="h1">
                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                        Projects
                    </SplitText>
                </Typography>
                <Spacing height='200px' />
            </Parallax>
            <Projects />

            <Parallax style={{boxShadow: '0 0 5px 6px rgba(60, 60, 60, .3)'}} 
            bgImage={require(`../../assets/images/index/${isDarkMode ? '6.jpg' : '20.jpg'}`)} 
            bgImageAlt="index" strength={-200} blur={0}>
                <Spacing height='200px' />
                <Typography align="center" variant="h1" component="h1">
                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                        Level Design
                    </SplitText>
                </Typography>
                <Spacing height='200px' />
            </Parallax>
            <Levels />

            <Parallax style={{boxShadow: '0 0 5px 6px rgba(60, 60, 60, .3)'}} 
            bgImage={require(`../../assets/images/index/${isDarkMode ? '55.png' : 't1.jpg'}`)} 
            bgImageAlt="index" strength={200} blur={0}>
                <Spacing height='200px' />
                <Typography align="center" variant="h1" component="h1">
                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                        Contact
                    </SplitText>
				</Typography>
                <Spacing height='200px' />
            </Parallax>
            <Contact />
            <Footer />
        </>
    );
}

interface LinkStateProps 
{
    projectModalActive: boolean,
    projects: LinkedProjectProps[],
    projectsStartIndex: number
}

interface LinkDispatchProps 
{
    toggleProjectModal: (active: boolean) => void,
    updateProjects: (projects: LinkedProjectProps[]) => void,
    setProjectsIndex: (index: number) => void
}

export type ReduxHomeProps = LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppState, ownProps: any): LinkStateProps => 
({
    projectModalActive: state.home.projectModalActive!,
    projects: state.home.projects!,
    projectsStartIndex: state.home.projectsStartIndex!
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, HomeActions>, ownProps: any): LinkDispatchProps => 
({
    toggleProjectModal: bindActionCreators(actions.toggleProjectModal, dispatch),
    updateProjects: bindActionCreators(actions.updateProjects, dispatch),
    setProjectsIndex: bindActionCreators(actions.setProjectsIndex, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);