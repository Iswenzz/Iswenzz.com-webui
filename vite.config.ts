import "dotenv/config";
import { resolve } from "path";

import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import eslintPlugin from "vite-plugin-eslint";
import stylelintPlugin from "vite-plugin-stylelint";
import tsconfigPaths from "vite-tsconfig-paths";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";

import { visualizer } from "rollup-plugin-visualizer";

const config = defineConfig(({ mode }) => ({
	root: ".",
	base: "/",
	build: {
		outDir: "build",
		rollupOptions: {
			input: {
				index: resolve(__dirname, "src/index.tsx")
			},
			output: {
				entryFileNames: "index.js"
			},
			plugins: [
				visualizer({
					filename: "./build/stats.html",
					open: mode === "development"
				}) as PluginOption
			]
		}
	},
	define: {
		"process.env": JSON.stringify(process.env)
	},
	css: {
		modules: {
			localsConvention: "camelCaseOnly",
			generateScopedName: "[local]--[hash:base64:5]"
		}
	},
	plugins: [
		react(),
		cssInjectedByJsPlugin(),
		eslintPlugin({
			cache: false,
			fix: true,
			include: ["src/**/*.{js,jsx,ts,tsx}"],
			exclude: ["node_modules"]
		}),
		stylelintPlugin({
			files: ["src/**/*.{css,scss}"],
			cache: false,
			fix: true
		}),
		tsconfigPaths({
			configNames: ["tsconfig.paths.json"]
		})
	],
	server: {
		open: true,
		port: 3000
	}
}));

export default config;
