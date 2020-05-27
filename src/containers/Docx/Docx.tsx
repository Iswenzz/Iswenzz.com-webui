import React, { FunctionComponent } from 'react';
import { AppState } from "application";
import { useSelector } from 'react-redux';
import NavBar from 'containers/UI/NavBar/NavBar';
import Footer from 'containers/UI/Footer/Footer';
import IntroHeader from 'containers/UI/IntroHeader/IntroHeader';
import DocViewer from 'containers/Docx/UI/DocViewer';
import { Element } from 'react-scroll';

const Docx: FunctionComponent = (): JSX.Element =>
{
    const isDarkMode = useSelector((state: AppState) => state.app.isDarkMode);

    return (
        <>
            {/* Header */}
            <Element name="header-section" />
            <NavBar style={{ background: 'rgba(50, 50, 60, 0.3)'}} />
            {/* About */}
            <IntroHeader title="CGSC" desc="Documentation" spaceTop='0px' spaceBottom='170px' 
            bgImage={require(`assets/images/docx/2.jpg`)} />
            {/* Viewer */}
            <DocViewer />
            {/* Footer */}
            <Footer />
        </>
    );
}

export default Docx;