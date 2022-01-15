import { FC, memo } from "react";
import { Parallax } from "react-parallax";
import { Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import {useTranslation} from "react-i18next";
import {SplitText} from "Components";

import scss from "./IntroHeader.module.scss";

export type IntroHeaderProps = {
	title: string,
	desc: string,
	spaceTop?: string,
	spaceBottom?: string,
	bgImage: string,
	parallaxStrength?: number,
	parallaxBlur?: number
};

/**
 * Page header with a parallax background & title.
 * @param props - IntroHeaderProps
 */
export const IntroHeader: FC<IntroHeaderProps> = (props: IntroHeaderProps): JSX.Element =>
{
	const { t } = useTranslation();

	return (
		<header>
			<Parallax className={scss.parallax} bgImage={props.bgImage} 
				bgImageAlt="index" blur={props.parallaxBlur || 0}
				strength={props.parallaxStrength || 400}>
				<Grid component="section" container className={scss.grid} 
					direction="column" justifyContent="center" alignItems="center">
					<Typography className="calli-h1 bold noselect" align="center" variant="h1" component="h1">
						<SplitText>
							{t(props.title)}
						</SplitText>
					</Typography>
					<Typography className="poiret bold noselect" align="center" variant="h3" component="h3">
						<SplitText>
							{t(props.desc)}
						</SplitText>
					</Typography>
					<Link to="intro-section" offset={5} smooth>
						<FontAwesomeIcon icon={faChevronDown} size="3x" className={scss.arrow} />
					</Link>
				</Grid>
			</Parallax>
		</header>
	);
};

export default memo(IntroHeader);
