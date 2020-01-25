import React, { FunctionComponent } from 'react';
import * as actions from './store/actions';
import { AppActions } from './store/types';
import { AppState } from './index';
import { Theme, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import Home from './containers/Home/Home';
import { connect } from 'react-redux';
import { ThunkDispatch } from 'redux-thunk';
import { bindActionCreators } from 'redux';
import { CssBaseline } from '@material-ui/core';

const App: FunctionComponent<ReduxAppProps> = (props: ReduxAppProps): JSX.Element =>
{
	let theme: Theme = responsiveFontSizes(createMuiTheme(
	{
		typography: {
			subtitle1: {
				fontFamily: "Ubuntu",
				color: 'rgba(220, 220, 220, 1)'
			},
			h1: {
				fontFamily: "Calligraffitti",
				color: 'rgba(220, 220, 220, 1)'
			},
			h2: {
				fontFamily: "Calligraffitti",
				color: 'rgba(220, 220, 220, 1)'
			}
		},
		overrides: {
			MuiCssBaseline: {
				'@global': {
					html: {
						'--scrollbarBG': props.isDarkMode ? '#23272a' : '#d9d9d9',
						'--thumbBG': props.isDarkMode ? '#3a3d41' : '#c0c0c0',
						overflowX: 'hidden'
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
			<Home />
		</ThemeProvider>
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