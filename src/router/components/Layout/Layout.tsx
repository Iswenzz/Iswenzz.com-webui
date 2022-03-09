import { FC } from "react";
import { Outlet } from "react-router";
import { Element } from "@izui/react";

import { NavBar, Footer } from "App/components";

/**
 * Page layout with navbar and footer.
 */
const Layout: FC = () => (
	<>
		<Element name="header" />
		<NavBar />
		<Outlet />
		<Footer />
		<Element name="footer" />
	</>
);

export default Layout;
