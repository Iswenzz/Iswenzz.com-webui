import { createTheme } from "@mui/material";

const LightTheme = createTheme({
	theme: "light",
	isDarkTheme: true,
	palette: {
		mode: "light",
		text: {
			primary: "rgba(60, 60, 60, 0.87)",
			secondary: "rgba(60, 60, 60, 0.54)",
			disabled: "rgba(60, 60, 60, 0.38)",
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
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				html: {
					"--scrollbarBG": "#d9d9d9",
					"--thumbBG": "#c0c0c0",
					overflowX: "hidden"
				},
				body: {
					scrollbarWidth: "thin",
					scrollbarColor: "var(--thumbBG) var(--scrollbarBG)",
					backgroundColor: "silver",
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
			styleOverrides: {
				tooltip: {
					fontSize: "1em",
				}
			}
		},
		MuiMenu: {
			styleOverrides: {
				paper: {
					backgroundColor: "transparent"
				}
			}
		},
		MuiFab: {
			styleOverrides: {
				primary: {
					backgroundColor: "#e5e5e5"
				},
			}
		},
		MuiDialogTitle: {
			styleOverrides: {
				root: {
					backgroundColor: "#e5e5e5"
				}
			}
		},
		MuiDialogContent: {
			styleOverrides: {
				root: {
					fontFamily: "Ubuntu",
					fontSize: 18,
					color: "rgba(60, 60, 60, 0.87)"
				}
			}
		}
	},
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
	}
});

export default LightTheme;
