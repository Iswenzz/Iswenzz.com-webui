import * as actions from './store/actions';
import React from 'react';
import { AppState } from "../..";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { Component } from "react";
import { connect } from 'react-redux';

import NavBar from '../UI/NavBar/NavBar';
import Spacing from '../../components/Spacing/Spacing';
import { Grid } from '@material-ui/core';
import Projects from './UI/Projects/Projects';
import Footer from '../UI/Footer/Footer';
import Intro from '../Home/UI/Intro/Intro';
import IntroSkill from '../Home/UI/Intro/IntroSkill';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import { HomeActions } from './store/types';
import { LinkedProjectProps } from '../../components/Project/Project';

interface LinkStateProp 
{
    introTextActive: boolean,
    projectModalActive: boolean,
    projects: LinkedProjectProps[]
}

interface LinkDispatchProps 
{
    toggleIntroText: (active: boolean) => void,
    toggleProjectModal: (active: boolean) => void,
    updateProjects: (projects: LinkedProjectProps[]) => void
}

export type ReduxHomeProps = LinkStateProp & LinkDispatchProps;

class Home extends Component<ReduxHomeProps>
{
    render(): JSX.Element
    {
        const fxs: JSX.Element = (
            <div>
                <ParallaxLayer offset={1.3} speed={0.3}>
                    <div style={{ pointerEvents: 'none' }}>
                        <img src='' alt='' style={{ width: '15%', marginLeft: '70%' }} />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1} speed={0.4}>
                    <div style={{ opacity: 0.1 }}>
                        <img src='' alt='' style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                        <img src='' alt='' style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
                    </div>
                </ParallaxLayer>
                <ParallaxLayer offset={1.75} speed={0.2}>
                    <div style={{ opacity: 0.1 }}>
                        <img src='' alt='' style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                        <img src='' alt='' style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
                    </div>
                </ParallaxLayer>
            </div>
        );

        const starBg: JSX.Element = (
            <ParallaxLayer offset={0} speed={0} factor={3}>
                <div style={{ backgroundImage: `url(${require('../../assets/images/index/stars.svg')})`, backgroundSize: 'cover', height: '100%' }} />
            </ParallaxLayer>
        );

        return (
            <div>
                <Parallax enabled={true} pages={3}>
                    {starBg}{fxs}
                    {/* Background */}
                    <ParallaxLayer offset={0} speed={0.3}>
                        <div style={{ backgroundImage: `url(${require('../../assets/images/index/1.jpg')})`, backgroundSize: 'cover', height: '100%' }} />
                    </ParallaxLayer>
                    
                    <ParallaxLayer offset={1.45} speed={0.3}>
                        <div style={{ backgroundImage: `url(${require('../../assets/images/index/2.jpg')})`, backgroundSize: 'cover', height: '100%' }} />
                    </ParallaxLayer>

                    {/* Pages */}
                    <ParallaxLayer offset={0} speed={0.1}>
                        <NavBar />
                        <Intro />
                        <Spacing height='300px' />
                        <IntroSkill />
                    </ParallaxLayer>

                    <ParallaxLayer offset={1.8} speed={0.1}>
                        <Projects />
                        <Footer />
                    </ParallaxLayer>
                    
                </Parallax>
            </div>
        );
    }
}

const mapStateToProps = (state: AppState, ownProps: any): LinkStateProp => 
({
    introTextActive: state.home.introTextActive!,
    projectModalActive: state.home.projectModalActive!,
    projects: state.home.projects!
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, HomeActions>, ownProps: any): LinkDispatchProps => 
({
    toggleIntroText: bindActionCreators(actions.toggleIntroText, dispatch),
    toggleProjectModal: bindActionCreators(actions.toggleProjectModal, dispatch),
    updateProjects: bindActionCreators(actions.updateProjects, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);