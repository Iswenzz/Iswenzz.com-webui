import { FC } from "react";
import { Link } from "@izui/react";
import { FaChevronDown } from "react-icons/fa";

import scss from "./NavigationChevron.module.scss";

/**
 * Animated arrow down component.
 */
const NavigationChevron: FC = () => (
	<Link to="#intro" smooth>
		<FaChevronDown className={scss.arrow} />
	</Link>
);

export default NavigationChevron;
