import { FC } from "react";

import { DocViewer } from "Docx/components";
import { Header } from "components";
import background from "assets/images/docx/blueprint.jpg";

/**
 * Docx page.
 */
const Docx: FC = () => (
	<>
		{/* About */}
		<Header title="CGSC" description="Documentation" background={background} />
		<DocViewer />
	</>
);

export default Docx;
