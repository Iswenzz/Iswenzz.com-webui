import { render } from "test/react";

import Footer from "../Footer";

const setup = () => render(<Footer />);

describe("Footer", () => {
	it("should render footer", () => {
		const { container } = setup();
		expect(container).toBeInTheDocument();
	});
});
