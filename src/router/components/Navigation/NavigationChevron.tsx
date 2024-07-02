import { FC } from "react";
import { Link } from "@izui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";

import scss from "./NavigationChevron.module.scss";

/**
 * Animated arrow down component.
 */
const NavigationChevron: FC = () => (
	<Link to="intro" offset={5} smooth>
		<FontAwesomeIcon icon={faChevronDown} size="3x" className={scss.arrow} />
	</Link>
);

export default NavigationChevron;
