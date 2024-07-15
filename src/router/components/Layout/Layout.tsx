import { FC } from "react";
import { Outlet } from "react-router";

import { NavBar, Footer } from "App/components";

/**
 * Page layout with navbar and footer.
 */
const Layout: FC = () => (
	<>
		<NavBar />
		<Outlet />
		<Footer />
	</>
);

export default Layout;
