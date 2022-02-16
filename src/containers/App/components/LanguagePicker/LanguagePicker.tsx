import { FC, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Fab, ListItemIcon, Menu, MenuItem, Typography, Grid } from "@mui/material";

import { languages, i18nLanguages, Language } from "App/i18next";
import { getLanguage, setLanguage, setModalActive } from "App/redux";

import { menuSx } from "./config";
import scss from "./LanguagePicker.module.scss";

/**
 * Pick the application language.
 */
const LanguagePicker: FC = () =>
{
	const dispatch = useDispatch();
	const currentLanguage = useSelector(getLanguage);

	const [anchorEl, setAnchorEl] = useState<Nullable<HTMLButtonElement>>(null);

	/**
	 * Set the application language.
	 * @param language - The language.
	 */
	const handleLanguageChange = (language: Language) =>
	{
		if (currentLanguage !== language)
			dispatch(setLanguage(language));
		handleMenuClose();
	};

	/**
	 * Open or close the menu.
	 * @param event - The mouse click event.
	 */
	const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
	{
		if (anchorEl === null)
		{
			dispatch(setModalActive(true));
			setAnchorEl(event.currentTarget);
		}
		else handleMenuClose();
	};

	/**
	 * Close the menu.
	 */
	const handleMenuClose = () =>
	{
		dispatch(setModalActive(false));
		setAnchorEl(null);
	};

	const CurrentLanguageIcon = languages[currentLanguage];

	return (
		<div>
			<Fab className={scss.button} aria-controls="language-menu"
				aria-haspopup="true" onClick={handleMenuClick} size="small">
				<CurrentLanguageIcon className={scss.icon} />
			</Fab>
			<Menu id="language-menu" anchorEl={anchorEl} keepMounted
				open={Boolean(anchorEl)} onClose={handleMenuClose} sx={menuSx}>
				{Object.entries(languages).map(([language, LanguageIcon]) => (
					<MenuItem key={language} onClick={() => handleLanguageChange(language as Language)}>
						<Grid container>
							<Grid item xs={6}>
								<Typography className={scss.typo} variant={"h5"} component={"h5"} >
									{i18nLanguages[language as Language]}
								</Typography>
							</Grid>
							<Grid item xs={6}>
								<ListItemIcon className={scss.itemIcon}>
									<LanguageIcon className={scss.icon} />
								</ListItemIcon>
							</Grid>
						</Grid>
					</MenuItem>
				))}
			</Menu>
		</div>
	);
};

export default LanguagePicker;
