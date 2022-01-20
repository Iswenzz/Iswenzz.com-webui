import { FC, memo } from "react";
import { Link } from "react-scroll";
import classNames from "classnames";

import { Grid } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import { TrailText, Parallax } from "components";

import scss from "./Header.module.scss";

/**
 * Header with a parallax background & title.
 */
const Header: FC<HeaderProps> = ({
	className, title, description = "", background, parallaxStrength = 400, parallaxBlur = 0
}) => (
	<header>
		<Parallax className={classNames(scss.parallax, className)} bgImage={background}
			bgImageAlt="parallax" blur={parallaxBlur} strength={parallaxStrength}>
			<Grid component="section" container className={scss.grid}
				direction="column" justifyContent="center" alignItems="center">
				<TrailText className="calli-h1 bold noselect" align="center" variant="h1" component="h1">
					{title}
				</TrailText>
				<TrailText className="poiret bold noselect" align="center" variant="h3" component="h3">
					{description}
				</TrailText>
				<Link to="intro-section" offset={5} smooth>
					<FontAwesomeIcon icon={faChevronDown} size="3x" className={scss.arrow} />
				</Link>
			</Grid>
		</Parallax>
	</header>
);

type HeaderProps = {
	className?: string,
	title: string,
	description?: string,
	background: string,
	parallaxStrength?: number,
	parallaxBlur?: number
};

export default memo(Header);
