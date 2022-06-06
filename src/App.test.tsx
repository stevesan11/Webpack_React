import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import App from "./App";

test("Displayed hello world", () => {
	render(<App />);
	screen.debug();
	expect(screen.getByText(/hello world/i)).toBeInTheDocument();
});
