import { FC } from "react";
import { Header } from "@izui/react/types";

import { NavigationChevron } from "router";
import { DocViewer } from "Docx/components";

import background from "assets/images/docx/blueprint.jpg";

/**
 * Docx page.
 */
const Docx: FC = () => (
	<>
		<Header
			title="CGSC"
			description="Documentation"
			background={background}
			titleClassName="gainsboro-90"
			descriptionClassName="gainsboro-90"
		>
			<NavigationChevron />
		</Header>
		<DocViewer />
	</>
);

export default Docx;
