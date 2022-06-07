module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	plugins: [
		"react",
		"react-hooks",
		"@typescript-eslint",
		"jest",
		"jest-dom",
		"testing-library",
	],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	overrides: [
		{
			files: [
				"**/__tests__/**/*.+(ts|tsx|js)",
				"**/?(*.)+(spec|test).+(ts|tsx|js)",
			],
			extends: [
				"plugin:jest/recommended",
				"plugin:jest-dom/recommended",
				"plugin:testing-library/react",
			],
		},
	],
	rules: {
		indent: ["error", "tab", { SwitchCase: 1 }],
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
	},
	settings: {
		react: {
			version: "detect",
		},
	},
};
