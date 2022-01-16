import { FC } from "react";

import { Header } from "components";
import { DocViewer } from "Docx/components";

/**
 * Docx page.
 */
const Docx: FC = () => (
	<>
		{/* About */}
		<Header title="CGSC" description="Documentation" background={require("assets/images/docx/2.jpg")} />
		<DocViewer />
	</>
);

export default Docx;
