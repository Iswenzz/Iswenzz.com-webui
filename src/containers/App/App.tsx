import React, { FC } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";
import { bindActionCreators } from "redux";
import { detect } from "detect-browser";

import { CssBaseline } from "@material-ui/core";
import { Theme, createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";

import { AppState } from "App";
import { toggleDarkMode, toggleModalActive, toggleLanguage, AppActions, AppRedux, AppDispatch } from "./redux";
import Home from "../Home/Home";
import {Language} from "./i18n";

import "./Common.scss";

/**
 * Application main container.
 * @param props - ReduxAppProps
 */
export const App: FC<AppRedux> = (props: AppRedux): JSX.Element =>
{
	/**
	 * Material UI custom dark/white theme.
	 */
	let theme: Theme = responsiveFontSizes(createTheme({
		typography: {
			subtitle1: {
				fontFamily: "Ubuntu",
				color: "rgba(220, 220, 220, 1)"
			},
			subtitle2: {
				fontFamily: "Poiret One",
				color: "rgba(220, 220, 220, 1)",
				fontWeight: "bold"
			},
			h1: {
				fontFamily: "Calligraffitti",
				color: "rgba(220, 220, 220, 1)"
			},
			h2: {
				fontFamily: "Calligraffitti",
				color: "rgba(220, 220, 220, 1)"
			},
			h3: {
				fontFamily: "Calligraffitti",
				color: "rgba(220, 220, 220, 1)"
			},
			h4: {
				fontFamily: "Calligraffitti",
				color: "rgba(220, 220, 220, 1)"
			},
			h5: {
				fontFamily: "Calligraffitti",
				color: "rgba(220, 220, 220, 1)"
			},
			caption: {
				fontFamily: "Ubuntu",
				color: "rgba(240, 240, 240, 1)"
			}
		},
		overrides: {
			MuiCssBaseline: {
				"@global": {
					html: {
						"--scrollbarBG": props.isDarkMode ? "#23272a" : "#d9d9d9",
						"--thumbBG": props.isDarkMode ? "#3a3d41" : "#c0c0c0",
						overflowX: "hidden",
						overflowY: props.isModalActive ? "hidden" : "visible"
					},
					body: {
						scrollbarWidth: "thin",
						scrollbarColor: "var(--thumbBG) var(--scrollbarBG)",
						backgroundColor: props.isDarkMode ? "black" : "silver",
						margin: 0
					},
					ul: {
						listStyle: "none",
						margin: 0,
						padding: 0
					},
					"::-webkit-scrollbar": {
						width: "12px"
					},
					"::-webkit-scrollbar-track": {
						background: "var(--scrollbarBG)",
						borderRadius: "10px"
					},
					"::-webkit-scrollbar-thumb": {
						backgroundColor: "var(--thumbBG)",
						border: "3px solid var(--scrollbarBG)",
						borderRadius: "10px",
					},
				}
			},
			MuiTooltip: {
				tooltip: {
					fontSize: "1em",
				}
			},
			MuiMenu: {
				paper: {
					backgroundColor: "transparent"
				}
			},
			MuiFab: {
				primary: {
					backgroundColor: props.isDarkMode ? "#2c2f33" : "#e5e5e5"
				},
			},
			MuiDialogTitle: {
				root: {
					backgroundColor: props.isDarkMode ? "#23272a" : "#e5e5e5"
				}
			},
			MuiDialogContent: {
				root: {
					fontFamily: "Ubuntu",
					fontSize: 18,
					color: `rgba(${props.isDarkMode ? 220 : 60}, ${props.isDarkMode ? 220 : 60}, ${props.isDarkMode ? 220 : 60}, 0.87)`
				}
			}
		},
		palette: {
			type: props.isDarkMode ? "dark" : "light",
			text: {
				primary: `rgba(${props.isDarkMode ? 220 : 60}, ${props.isDarkMode ? 220 : 60}, ${props.isDarkMode ? 220 : 60}, 0.87)`,
				secondary: `rgba(${props.isDarkMode ? 220 : 60}, ${props.isDarkMode ? 220 : 60}, ${props.isDarkMode ? 220 : 60}, 0.54)`,
				disabled: `rgba(${props.isDarkMode ? 220 : 60}, ${props.isDarkMode ? 220 : 60}, ${props.isDarkMode ? 220 : 60}, 0.38)`,
				hint: `rgba(${props.isDarkMode ? 220 : 60}, ${props.isDarkMode ? 220 : 60}, ${props.isDarkMode ? 220 : 60}, 0.38)`,
			},
			primary: {
				light: "#f4f4f4",
				main: "#2c2f33",
				dark: "#23272a",
				contrastText: "#dcdcdc",
			},
			secondary: {
				light: "#ff4081",
				main: "#f50057",
				dark: "#c51162",
				contrastText: "#dcdcdc",
			},
		},
	}));

	return (
		<ThemeProvider theme={theme}> 
			<CssBaseline />
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />}>
						{/* <Route path="/docs" element={<Docx />} /> */} {/* WIP */}
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};

const mapStateToProps = (state: AppState, ownProps: any): AppRedux => ({
	browserInfo: state.app.browserInfo,
	isDarkMode: state.app.isDarkMode,
	isModalActive: state.app.isModalActive,
	language: state.app.language
});

const mapDispatchToProps = (dispatch: ThunkDispatch<any, any, AppActions>, ownProps: any): AppDispatch => ({
	toggleDarkMode: bindActionCreators(toggleDarkMode, dispatch),
	toggleModalActive: bindActionCreators(toggleModalActive, dispatch),
	toggleLanguage: bindActionCreators(toggleLanguage, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);