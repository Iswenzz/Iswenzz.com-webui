import { FC } from "react";
import IntroHeader from "App/components/IntroHeader/IntroHeader";
import DocViewer from "Docx/components/DocViewer/DocViewer";

/**
 * Docx container page.
 */
const Docx: FC = (): JSX.Element =>
{
	return (
		<>
			{/* About */}
			<IntroHeader title="CGSC" desc="Documentation" spaceTop='0px' spaceBottom='170px' 
				bgImage={require("assets/images/docx/2.jpg")} />
			<DocViewer />
		</>
	);
};

export default Docx;
