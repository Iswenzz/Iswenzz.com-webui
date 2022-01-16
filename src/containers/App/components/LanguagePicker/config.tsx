import { createTheme } from "@mui/material";

export const menuTheme = createTheme({
	components: {
		MuiMenu: {
			styleOverrides: {
				paper: {
					top: "48px !important",
					backgroundColor: "rgba(50, 50, 60, 0.3) !important",
					color: "gainsboro !important"
				}
			}
		}
	}
});
