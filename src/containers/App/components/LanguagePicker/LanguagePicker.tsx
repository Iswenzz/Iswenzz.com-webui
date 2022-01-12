import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fab, ListItemIcon, Menu, MenuItem, Typography, createTheme, ThemeProvider, Grid } from "@material-ui/core";
import { i18nLanguages, Language } from "App/i18n";
import { getLanguage, setLanguage, setModalActive } from "App/redux";
import "./LanguagePicker.scss";

export const languages: Record<Language, JSX.Element> = {
	en: <img className={"languagepicker-icon"} src={require("assets/images/flags/262-united-kingdom.svg")} alt={"United Kingdom"} />,
	fr: <img className={"languagepicker-icon"} src={require("assets/images/flags/077-france.svg")} alt={"France"} />,
	es: <img className={"languagepicker-icon"} src={require("assets/images/flags/044-spain.svg")} alt={"Spain"} />,
	it: <img className={"languagepicker-icon"} src={require("assets/images/flags/011-italy.svg")} alt={"Italy"} />,
	zh: <img className={"languagepicker-icon"} src={require("assets/images/flags/261-china.svg")} alt={"Chinese"} />
};

const menuTheme = createTheme({
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

/**
 * Pick the application language.
 */
export const LanguagePicker: FC = (): JSX.Element =>
{
	const dispatch = useDispatch();
	const currentLanguage = useSelector(getLanguage);
	const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);

	/**
	 * Change the application language.
	 * @param language - The language.
	 */
	const toggle = (language: Language): void =>
	{
		dispatch(setLanguage(language));
		handleClose();
		window.location.reload();
	};

	/**
	 * On menu click.
	 * @param event
	 */
	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void =>
	{
		if (anchorEl === null)
		{
			dispatch(setModalActive(true));
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
		dispatch(setModalActive(false));
		setAnchorEl(null);
	};

	return (
		<div className={"languagepicker"}>
			<Fab className={"languagepicker-button"} aria-controls="language-menu"
				 aria-haspopup="true" onClick={handleClick} size="small">
				{languages[currentLanguage]}
			</Fab>
			<ThemeProvider theme={menuTheme}>
				<Menu className={"languagepickermenu"} id="language-menu" anchorEl={anchorEl}
					  keepMounted open={Boolean(anchorEl)} onClose={handleClose} disableScrollLock>
					{Object.entries(languages).map(([lang, langNode]) => (
						<MenuItem key={lang} onClick={() => toggle(lang as Language)}>
							<Grid container>
								<Grid item xs={6}>
									<Typography className={"languagepickermenu-typo"} variant={"h5"} component={"h5"} >
										{i18nLanguages[lang as Language]}
									</Typography>
								</Grid>
								<Grid item xs={6}>
									<ListItemIcon className={"languagepickermenu-itemicon"}>
										{langNode}
									</ListItemIcon>
								</Grid>
							</Grid>
						</MenuItem>
					))}
				</Menu>
			</ThemeProvider>
		</div>
	);
};

export default LanguagePicker;
