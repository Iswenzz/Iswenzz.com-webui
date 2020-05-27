import * as actions from 'containers/Home/store/actions';
import React, { FunctionComponent } from 'react';
import { AppState } from "application";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { connect, useSelector } from 'react-redux';
import NavBar from 'containers/UI/NavBar/NavBar';
import Projects from 'containers/Home/UI/Projects/Projects';
import Footer from 'containers/UI/Footer/Footer';
import IntroHeader from 'containers/UI/IntroHeader/IntroHeader';
import IntroSkill from 'containers/Home/UI/Intro/IntroSkill';
import Contact from 'containers/Home/UI/Contact/Contact';
import Levels from 'containers/Home/UI/Levels/Levels';
import { HomeActions } from 'containers/Home/store/types';
import { LinkedProjectProps } from 'containers/Home/UI/Project/Project';
import { Parallax } from 'react-parallax';
import { Typography, Divider } from '@material-ui/core';
import SplitText from 'react-pose-text';
import Spacing from 'components/Spacing/Spacing';
import ProjectPopup from 'containers/Home/UI/ProjectPopup/ProjectPopup';
import { Element } from 'react-scroll';
import 'Text.scss';

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
            {/* Header */}
            <Element name="header-section" />
            <NavBar style={{ background: 'rgba(50, 50, 60, 0.3)'}} />

            {/* About */}
            <IntroHeader title="Iswenzz" desc="Software Engineer and Level Designer" 
            bgImage={require(`assets/images/index/${isDarkMode ? '20.jpg' : 'nature1.jpg'}`)} />
            <IntroSkill />

            {/* Projects */}
            <ProjectPopup />
            <Projects />

            {/* Levels */}
            <Levels />

            {/* Contact */}
            <Parallax style={{boxShadow: '0 0 5px 6px rgba(60, 60, 60, .3)'}} 
            bgImage={require(`assets/images/index/${isDarkMode ? '55.jpg' : 't1.jpg'}`)} 
            bgImageAlt="index" strength={200} blur={0}>
                <Typography style={{ userSelect: 'none', paddingTop: '200px', paddingBottom: '200px' }} 
                align="center" variant="h1" component="h1">
                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                        Contact
                    </SplitText>
				</Typography>
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