import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import prettier from "eslint-config-prettier";
import pluginNext from "@next/eslint-plugin-next";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import globals from "globals";

export default tseslint.config(
	eslint.configs.recommended,
	tseslint.configs.recommended,
	prettier,
	{
		...pluginReact.configs.flat.recommended,
		languageOptions: {
			...pluginReact.configs.flat.recommended.languageOptions,
			globals: {
				...globals.node,
				...globals.browser,
				...globals.serviceworker
			}
		}
	},
	{
		plugins: {
			"react-hooks": pluginReactHooks
		},
		settings: { react: { version: "detect" } },
		rules: {
			...pluginReactHooks.configs.recommended.rules,
			"react/react-in-jsx-scope": "off"
		}
	},
	{
		plugins: {
			"@next/next": pluginNext
		},
		rules: {
			...pluginNext.configs.recommended.rules,
			...pluginNext.configs["core-web-vitals"].rules
		}
	}
);
