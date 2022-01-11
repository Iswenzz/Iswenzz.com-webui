import { FC } from "react";
import { NavBar, Footer } from "App/components";

/**
 * Page layout with navbar and footer.
 */
const NavigationLayout: FC = ({ children }) => (
	<>
		<NavBar />
		{children}
		<Footer />
	</>
);

export default NavigationLayout;
