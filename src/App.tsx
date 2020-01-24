import React, { FunctionComponent } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import * as actions from './store/actions';
import { AppActions } from './store/types';
import { AppState } from './index';
import { Theme, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Home from './containers/Home/Home';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';

const App: FunctionComponent<ReduxAppProps> = (props: ReduxAppProps): JSX.Element =>
{
	let theme: Theme = responsiveFontSizes(createMuiTheme(
	{
		typography: {
			subtitle1: {
				fontFamily: "Ubuntu",
				color: 'rgba(220, 220, 220, 1)'
			},
		},
		overrides: {
			MuiTooltip: {
				tooltip: {
					fontSize: "1em",
				}
			},
			MuiFab: {
				primary: {
					backgroundColor: props.isDarkMode ? '#2c2f33' : '#e5e5e5'
				},
			},
			MuiDialogTitle: {
				root: {
					backgroundColor: props.isDarkMode ? '#23272a' : '#e5e5e5'
				}
			},
			MuiDialogContent: {
				root: {
					fontFamily: 'Ubuntu',
					fontSize: 18,
					color: `rgba(${props.isDarkMode ? 220 : 60}, ${props.isDarkMode ? 220 : 60}, ${props.isDarkMode ? 220 : 60}, 0.87)`
				}
			}
		},
		palette: {
			type: props.isDarkMode ? 'dark' : 'light',
			text: {
				primary: `rgba(${props.isDarkMode ? 220 : 60}, ${props.isDarkMode ? 220 : 60}, ${props.isDarkMode ? 220 : 60}, 0.87)`,
				secondary: `rgba(${props.isDarkMode ? 220 : 60}, ${props.isDarkMode ? 220 : 60}, ${props.isDarkMode ? 220 : 60}, 0.54)`,
				disabled: `rgba(${props.isDarkMode ? 220 : 60}, ${props.isDarkMode ? 220 : 60}, ${props.isDarkMode ? 220 : 60}, 0.38)`,
				hint: `rgba(${props.isDarkMode ? 220 : 60}, ${props.isDarkMode ? 220 : 60}, ${props.isDarkMode ? 220 : 60}, 0.38)`,
			},
			primary: {
				light: '#f4f4f4',
				main: '#2c2f33',
				dark: '#23272a',
				contrastText: '#dcdcdc',
			},
			secondary: {
				light: '#ff4081',
				main: '#f50057',
				dark: '#c51162',
				contrastText: '#dcdcdc',
			},
		},
	}));

	return (
		<ParallaxProvider>
			<ThemeProvider theme={theme}> 
				<Home />
			</ThemeProvider>
		</ParallaxProvider>
	);
}

interface LinkStateProps
{
	isDarkMode: boolean
}

interface LinkDispatchProps
{
	toggleDarkMode: (active: boolean) => void
}

export type ReduxAppProps = LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppState, ownProps: any): LinkStateProps => 
({
    isDarkMode: state.app.isDarkMode!,
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>, ownProps: any): LinkDispatchProps => 
({
    toggleDarkMode: bindActionCreators(actions.toggleDarkMode, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);