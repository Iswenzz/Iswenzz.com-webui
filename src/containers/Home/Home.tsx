import * as actions from './store/actions';
import React from 'react';
import { AppState } from "../..";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { Component } from "react";
import { connect } from 'react-redux';

import { Parallax } from 'react-parallax';
import NavBar from '../UI/NavBar/NavBar';
import RadialGradient from '../../components/RadialGradient/RadialGradient';
import Footer from '../UI/Footer/Footer';
import Intro from '../Home/UI/Intro/Intro';
import { HomeActions } from './store/types';

interface LinkStateProp 
{
	introTextActive: boolean
}

interface LinkDispatchProps 
{
	toggleIntroText: (active: boolean) => void
}

export type ReduxHomeProps = LinkStateProp & LinkDispatchProps;

class Home extends Component<ReduxHomeProps>
{
    render(): JSX.Element
    {
        return (
            <div>
                {/* Intro */}
                <NavBar />
                <Intro />

                {/* Projects */}
                <Parallax bgImage={require('../../assets/images/index/2.jpg')} bgImageAlt="index bg2" strength={500}>
                    <div style={{ height: '500px' }} />
                </Parallax>
                <RadialGradient height='600px' position='ellipse at bottom' colors={[
                    { color: '#23272B', colorPercent: '0%' },
                    { color: '#090A0A', colorPercent: '100%' }
                ]} />

                {/* Level Design */}

                {/* Footer */}
                <Footer />
            </div>
        );
    }
}

const mapStateToProps = (state: AppState, ownProps: any): LinkStateProp => 
({
	introTextActive: state.home.introTextActive!
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, HomeActions>, ownProps: any): LinkDispatchProps => 
({
	toggleIntroText: bindActionCreators(actions.toggleIntroText, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);