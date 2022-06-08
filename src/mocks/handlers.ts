// src/mocks/handlers.js
import { rest } from "msw";

export const handlers = [
	// Handles a POST /login request
	rest.get("https://localhost:3000/dummy", (req, res, ctx) => {
		return res(ctx.json({ data: "dummy" }));
	}),
];
