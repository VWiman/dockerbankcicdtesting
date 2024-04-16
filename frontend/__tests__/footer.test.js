/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer/Footer";

describe("Footer", () => {
	it("makes sure Footer renders a footer", () => {
		render(<Footer />);
		const footerElement = screen.getByRole("contentinfo");
		expect(footerElement).toBeInTheDocument();
	});
});
