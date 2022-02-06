import { FC } from "react";
import { Outlet } from "react-router";
import { Element } from "react-scroll";

import { NavBar, Footer } from "App/components";

/**
 * Page layout with navbar and footer.
 */
const Layout: FC = () => (
	<>
		<Element name="header-section" />
		<NavBar />
		<Outlet />
		<Footer />
		<Element name="footer-section" />
	</>
);

export default Layout;
