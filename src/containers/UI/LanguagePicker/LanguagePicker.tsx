import React, {FunctionComponent} from "react";
import {Fab, ListItemIcon, Menu, MenuItem, Typography} from "@material-ui/core";
import {Language} from "../../../i18n";
import * as actions from "../../../store/actions";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../../application";
import "./LanguagePicker.scss";

export const languages: Record<Language, JSX.Element> = {
	en: <img className={"languagepicker-icon"} src={require("assets/images/flags/262-united-kingdom.svg")} alt={"United Kingdom"} />,
	fr: <img className={"languagepicker-icon"} src={require("assets/images/flags/077-france.svg")} alt={"France"} />,
	es: <img className={"languagepicker-icon"} src={require("assets/images/flags/044-spain.svg")} alt={"Spain"} />
};

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
	};

	/**
	 * On menu click.
	 * @param event
	 */
	const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void =>
	{
		dispatch(actions.toggleModalActive(true));
		setAnchorEl(event.currentTarget);
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
			<Menu className={"languagepickermenu"} id="language-menu" anchorEl={anchorEl}
				  keepMounted open={Boolean(anchorEl)} onClose={handleClose} disableScrollLock>
				{Object.values(languages).map(langNode => (
					<MenuItem onClick={handleClose}>
						<Typography className={"languagepickermenu-typo"} variant={"h5"} component={"h5"} >
							TODO
						</Typography>
						<ListItemIcon>
							{langNode}
						</ListItemIcon>
					</MenuItem>
				))}
			</Menu>
		</div>
	);
};

export default LanguagePicker;