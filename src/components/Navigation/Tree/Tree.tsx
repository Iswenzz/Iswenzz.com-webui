import { FC } from "react";
import "./Tree.scss";

/**
 * Tree container.
 */
const Tree: FC = ({ children }) => (
	<ul className={"tree"}>
		{children}
	</ul>
);

export default Tree;
