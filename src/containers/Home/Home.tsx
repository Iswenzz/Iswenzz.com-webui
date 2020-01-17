import * as actions from './store/actions';
import React, { FunctionComponent } from 'react';
import { AppState } from "../..";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { connect } from 'react-redux';

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

export type ReduxHomeProps = LinkStateProp & LinkDispatchProps;

const Home: FunctionComponent<ReduxHomeProps> = (props: ReduxHomeProps): JSX.Element =>
{
    return (
        <div>
            <Parallax bgImage={require('../../assets/images/index/20.jpg')} bgImageAlt="index" strength={400} blur={5}>
                <Spacing height='100px' />
                <NavBar />
                <Intro />
                <Spacing height='300px' />
                <IntroSkill />
            </Parallax>

            <Parallax bgImage={require('../../assets/images/index/4.jpg')} bgImageAlt="index" strength={-400} blur={3}>
                <Spacing height='200px' />
                <Projects />
            </Parallax>

            <Parallax bgImage={require('../../assets/images/index/3.png')} bgImageAlt="index" strength={-400} blur={3}>
                <Spacing height='200px' />
                <Levels />
            </Parallax>

            <Parallax bgImage={require('../../assets/images/index/3.jpg')} bgImageAlt="index" strength={-400} blur={3}>
                <Spacing height='200px' />
                <Contact />
                <Footer />
            </Parallax>
        </div>
    );
}

interface LinkStateProp 
{
    introTextActive: boolean,
    projectModalActive: boolean,
    projects: LinkedProjectProps[],
    projectsStartIndex: number
}

interface LinkDispatchProps 
{
    toggleIntroText: (active: boolean) => void,
    toggleProjectModal: (active: boolean) => void,
    updateProjects: (projects: LinkedProjectProps[]) => void,
    setProjectsIndex: (index: number) => void
}

const mapStateToProps = (state: AppState, ownProps: any): LinkStateProp => 
({
    introTextActive: state.home.introTextActive!,
    projectModalActive: state.home.projectModalActive!,
    projects: state.home.projects!,
    projectsStartIndex: state.home.projectsStartIndex!
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, HomeActions>, ownProps: any): LinkDispatchProps => 
({
    toggleIntroText: bindActionCreators(actions.toggleIntroText, dispatch),
    toggleProjectModal: bindActionCreators(actions.toggleProjectModal, dispatch),
    updateProjects: bindActionCreators(actions.updateProjects, dispatch),
    setProjectsIndex: bindActionCreators(actions.setProjectsIndex, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);