import { FC } from "react";

import scss from "./Tree.module.scss";

/**
 * Tree container.
 */
const Tree: FC = ({ children }) => (
	<ul className={scss.tree}>
		{children}
	</ul>
);

export default Tree;
