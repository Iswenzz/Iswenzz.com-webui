import React, {FunctionComponent} from "react";
import {Fab, ListItemIcon, Menu, MenuItem, Typography, createMuiTheme, ThemeProvider, Grid} from "@material-ui/core";
import {i18nLanguages, Language} from "../../../i18n";
import * as actions from "../../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../../application";
import "./LanguagePicker.scss";

export const languages: Record<Language, JSX.Element> = {
	en: <img className={"languagepicker-icon"} src={require("assets/images/flags/262-united-kingdom.svg")} alt={"United Kingdom"} />,
	fr: <img className={"languagepicker-icon"} src={require("assets/images/flags/077-france.svg")} alt={"France"} />,
	es: <img className={"languagepicker-icon"} src={require("assets/images/flags/044-spain.svg")} alt={"Spain"} />
};

const menuTheme = createMuiTheme({
	overrides: {
		MuiMenu: {
			paper: {
				top: "48px !important",
				backgroundColor: "rgba(50, 50, 60, 0.3) !important",
				color: "gainsboro"
			}
		}
	}
});

export const LanguagePicker: FunctionComponent = (): JSX.Element =>
{
	const dispatch = useDispatch();
	const currentLanguage: Language = useSelector((state: AppState) => state.app.language);
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLButtonElement>(null);

	/**
	 * Change the application language.
	 * @param lang - The language.
	 */
	const toggleLanguage = (lang: Language): void =>
	{
		dispatch(actions.toggleLanguage(lang));
		localStorage.setItem("language", lang);
		handleClose();
	};

	/**
	 * On menu click.
	 * @param event
	 */
	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void =>
	{
		if (anchorEl === null)
		{
			dispatch(actions.toggleModalActive(true));
			setAnchorEl(event.currentTarget);
		}
		else
			handleClose();
	};

	/**
	 * On menu close.
	 */
	const handleClose = (): void =>
	{
		dispatch(actions.toggleModalActive(false));
		setAnchorEl(null);
	};

	return (
		<div className={"languagepicker"}>
			<Fab className={"languagepicker-button"} aria-controls="language-menu"
				 aria-haspopup="true" onClick={handleClick} size='small'>
				{languages[currentLanguage]}
			</Fab>
			<ThemeProvider theme={menuTheme}>
				<Menu className={"languagepickermenu"} id="language-menu" anchorEl={anchorEl}
					  keepMounted open={Boolean(anchorEl)} onClose={handleClose} disableScrollLock>
					{Object.entries(languages).map(([lang, langNode]) => (
						<MenuItem key={lang} onClick={() => toggleLanguage(lang as Language)}>
							<Grid container justify={"space-between"} alignItems={"center"}>
								<Typography className={"languagepickermenu-typo"} variant={"h5"} component={"h5"} >
									{i18nLanguages[lang as Language]}
								</Typography>
								<ListItemIcon>
									{langNode}
								</ListItemIcon>
							</Grid>
						</MenuItem>
					))}
				</Menu>
			</ThemeProvider>
		</div>
	);
};

export default LanguagePicker;