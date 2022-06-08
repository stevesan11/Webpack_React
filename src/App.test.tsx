import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event";

test("Displayed hello world", async () => {
	render(<App />);

	const helloWorld = screen.getByRole("button", { name: /hello world/i });
	expect(helloWorld).toHaveClass("bg-black");
	const fetchData = screen.getByText("text:", { exact: false });
	expect(fetchData).toHaveTextContent("undefined");
	await userEvent.click(helloWorld);
	await waitFor(() => expect(fetchData).toHaveTextContent("dummy"));
});
