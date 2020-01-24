import * as actions from './store/actions';
import React, { FunctionComponent } from 'react';
import { AppState } from "../..";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { connect, useSelector } from 'react-redux';

import NavBar from '../UI/NavBar/NavBar';
import Spacing from '../../components/Spacing/Spacing';
import Projects from './UI/Projects/Projects';
import Footer from '../UI/Footer/Footer';
import Intro from '../Home/UI/Intro/Intro';
import IntroSkill from '../Home/UI/Intro/IntroSkill';
import Contact from '../Home/UI/Contact/Contact';
import Levels from '../Home/UI/Levels/Levels';
import { HomeActions } from './store/types';
import { LinkedProjectProps } from './UI/Project/Project';
import { Parallax } from 'react-parallax';

const Home: FunctionComponent = (): JSX.Element =>
{
    const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);

    return (
        <>
            <Parallax bgImage={require(`../../assets/images/index/${isDarkMode ? '20.jpg' : 'nature1.jpg'}`)} 
            bgImageAlt="index" strength={400} blur={3}>
                <Spacing height='100px' />
                <NavBar />
                <Intro />
                <Spacing height='300px' />
                <IntroSkill />
            </Parallax>

            <Parallax bgImage={require(`../../assets/images/index/${isDarkMode ? '4.jpg' : '2.jpg'}`)} 
            bgImageAlt="index" strength={-400} blur={3}>
                <Spacing height='200px' />
                <Projects />
            </Parallax>

            <Parallax bgImage={require(`../../assets/images/index/${isDarkMode ? '3.png' : '20.jpg'}`)} 
            bgImageAlt="index" strength={-400} blur={3}>
                <Spacing height='200px' />
                <Levels />
            </Parallax>

            <Parallax bgImage={require(`../../assets/images/index/${isDarkMode ? '3.jpg' : 'nature7.jpg'}`)} 
            bgImageAlt="index" strength={-400} blur={3}>
                <Spacing height='200px' />
                <Contact />
                <Footer />
            </Parallax>
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