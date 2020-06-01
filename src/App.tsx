import React, { FunctionComponent } from 'react';
import * as actions from 'store/actions';
import { AppActions } from 'store/types';
import { AppState } from 'application';
import { Theme, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Home from 'containers/Home/Home';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { CssBaseline } from '@material-ui/core';
import { detect } from 'detect-browser';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Docx from 'containers/Docx/Docx';

export const App: FunctionComponent<ReduxAppProps> = (props: ReduxAppProps): JSX.Element =>
{
	let theme: Theme = responsiveFontSizes(createMuiTheme(
	{
		typography: {
			subtitle1: {
				fontFamily: "Ubuntu",
				color: 'rgba(220, 220, 220, 1)'
			},
			subtitle2: {
				fontFamily: "Poiret One",
				color: 'rgba(220, 220, 220, 1)',
				fontWeight: 'bold'
			},
			h1: {
				fontFamily: "Calligraffitti",
				color: 'rgba(220, 220, 220, 1)'
			},
			h2: {
				fontFamily: "Calligraffitti",
				color: 'rgba(220, 220, 220, 1)'
			},
			h3: {
				fontFamily: "Calligraffitti",
				color: 'rgba(220, 220, 220, 1)'
			},
			h4: {
				fontFamily: "Calligraffitti",
				color: 'rgba(220, 220, 220, 1)'
			},
			h5: {
				fontFamily: "Calligraffitti",
				color: 'rgba(220, 220, 220, 1)'
			},
			caption: {
				fontFamily: "Ubuntu",
				color: 'rgba(240, 240, 240, 1)'
			}
		},
		overrides: {
			MuiCssBaseline: {
				'@global': {
					html: {
						'--scrollbarBG': props.isDarkMode ? '#23272a' : '#d9d9d9',
						'--thumbBG': props.isDarkMode ? '#3a3d41' : '#c0c0c0',
						overflowX: 'hidden',
						overflowY: props.isModalActive ? 'hidden' : 'visible'
					},
					body: {
						scrollbarWidth: 'thin',
						scrollbarColor: 'var(--thumbBG) var(--scrollbarBG)',
						backgroundColor: props.isDarkMode ? 'black' : 'silver', 
						margin: 0
					},
					'::-webkit-scrollbar': {
						width: '12px'
					},
					'::-webkit-scrollbar-track': {
						background: 'var(--scrollbarBG)',
						borderRadius: '10px'
					},
					'::-webkit-scrollbar-thumb': {
						backgroundColor: 'var(--thumbBG)',
						border: '3px solid var(--scrollbarBG)',
						borderRadius: '10px',
					},
				}
			},
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
		<ThemeProvider theme={theme}> 
			<CssBaseline />
			<BrowserRouter>
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/docs" component={Docx} />
				</Switch>
			</BrowserRouter>
		</ThemeProvider>
	);
}

interface LinkStateProps
{
	browserInfo: ReturnType<typeof detect>,
	isDarkMode: boolean,
	isModalActive: boolean
}

interface LinkDispatchProps
{
	toggleDarkMode: (active: boolean) => void,
	toggleModalActive: (active: boolean) => void
}

export type ReduxAppProps = LinkStateProps & LinkDispatchProps;

const mapStateToProps = (state: AppState, ownProps: any): LinkStateProps => 
({
	browserInfo: state.app.browserInfo,
	isDarkMode: state.app.isDarkMode,
	isModalActive: state.app.isModalActive
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>, ownProps: any): LinkDispatchProps => 
({
	toggleDarkMode: bindActionCreators(actions.toggleDarkMode, dispatch),
	toggleModalActive: bindActionCreators(actions.toggleModalActive, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);