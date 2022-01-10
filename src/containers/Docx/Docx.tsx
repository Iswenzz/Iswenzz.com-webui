import React, { FC } from "react";
import { AppState } from "../App";
import { useSelector } from "react-redux";
import NavBar from "App/NavBar/NavBar";
import Footer from "App/Footer/Footer";
import IntroHeader from "App/IntroHeader/IntroHeader";
import DocViewer from "Docx/DocViewer/DocViewer";
import { Element } from "react-scroll";

/**
 * Docx container page.
 */
const Docx: FC = (): JSX.Element =>
{
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);

	return (
		<>
			{/* Header */}
			<Element name="header-section" />
			<NavBar className="navbar" />
			{/* About */}
			<IntroHeader title="CGSC" desc="Documentation" spaceTop='0px' spaceBottom='170px' 
				bgImage={require("assets/images/docx/2.jpg")} />
			{/* Viewer */}
			<DocViewer />
			{/* Footer */}
			<Footer />
		</>
	);
};

export default Docx;