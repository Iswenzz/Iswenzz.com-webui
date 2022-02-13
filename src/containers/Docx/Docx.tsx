import { FC } from "react";
import { Header } from "@izui/react";

import { DocViewer } from "Docx/components";
import background from "assets/images/docx/blueprint.jpg";
import { NavigationChevron } from "router/components";

/**
 * Docx page.
 */
const Docx: FC = () => (
	<>
		{/* About */}
		<Header title="CGSC" description="Documentation" background={background}>
			<NavigationChevron />
		</Header>
		<DocViewer />
	</>
);

export default Docx;
