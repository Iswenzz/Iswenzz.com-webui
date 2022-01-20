import { buildRender, fireEvent } from "test/react";
import Flip, { FlipProps } from "../Flip";

const setup = buildRender<FlipProps, Query>({
	component: Flip,
	defaultProps: {
		front: <div>FRONT</div>,
		back: <div>BACK</div>
	},
	queries: ({ container, getByText }) => ({
		component: container.firstChild as HTMLElement,
		front: getByText("FRONT"),
		back: getByText("BACK")
	})
});

describe("Flip", () =>
{
	it("should flip the component", () =>
	{
		const { front, component } = setup();

		expect(component).toHaveClass("front");
		fireEvent.click(front);
		expect(component).toHaveClass("back");
	});

	it("should render both front and back", () =>
	{
		const { front, back } = setup();

		expect(front).toBeInTheDocument();
		expect(back).toBeInTheDocument();
	});

	it("should render front", () =>
	{
		const { component } = setup();

		expect(component).toHaveClass("front");
	});

	it("should render back", () =>
	{
		const { component } = setup({ flipped: true });

		expect(component).toHaveClass("back");
	});

	it("should call the flip callback", () =>
	{
		const flipCallback = jest.fn();
		const { front } = setup({ flipCallback });

		expect(flipCallback).not.toHaveBeenCalled();
		fireEvent.click(front);
		expect(flipCallback).toHaveBeenCalled();
	});
});

type Query = {
	component: HTMLElement,
	front: HTMLElement,
	back: HTMLElement
};
