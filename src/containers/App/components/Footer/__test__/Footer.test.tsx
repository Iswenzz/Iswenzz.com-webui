import { render } from "test/react";

import { DarkTheme, Themes } from "@izui/react/types";
import Footer from "../Footer";

const setup = () =>
	render(
		<Themes theme={DarkTheme}>
			<Footer />
		</Themes>
	);

describe("Footer", () => {
	it("should render footer", () => {
		const { container } = setup();
		expect(container).toBeInTheDocument();
	});
});
