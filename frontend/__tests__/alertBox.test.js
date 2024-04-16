/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import {AlertBox} from "../components/AlertBox";

describe("AlertBox", () => {
	it("renders an AlertBox with the provided textmessage", () => {
		const testMessage = "test";
		render(<AlertBox message={testMessage} />);

		const displayedMessage = screen.getByText(testMessage);
		expect(displayedMessage).toBeInTheDocument();
		expect(displayedMessage).toBeVisible();
		expect(displayedMessage).toHaveTextContent(testMessage);
	});
});

describe("AlertBox", () => {
	it("renders an AlertBox with the provided number", () => {
		const testMessage = 10;
		render(<AlertBox message={testMessage} />);

		const displayedMessage = screen.getByText(testMessage);
		expect(displayedMessage).toBeInTheDocument();
		expect(displayedMessage).toBeVisible();
		expect(displayedMessage).toHaveTextContent(testMessage);
	});
});

describe("AlertBox", () => {
	it("renders an AlertBox with the provided object", () => {
		const ten = { number: 10 };
		const testMessage = ten;
		render(<AlertBox message={testMessage.number} />);

		const displayedMessage = screen.getByText(testMessage.number);
		expect(displayedMessage).toBeInTheDocument();
		expect(displayedMessage).toBeVisible();
		expect(displayedMessage).toHaveTextContent(testMessage.number);
	});
});