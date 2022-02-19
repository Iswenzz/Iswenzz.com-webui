import yargs from "yargs";
import { hideBin } from "yargs/helpers";
import { addBeforeLoader, CracoConfig, ESLINT_MODES, loaderByName, when } from "@craco/craco";

import cracoBabelLoader from "craco-babel-loader";
import StylelintPlugin from "stylelint-webpack-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { default as BundleHighlightPlugin } from "@izui/scripts/webpack/bundleHighlight";

import highlightConfig from "./src/config/highlight.json";
import tsConfig from "./tsconfig.json";
import tsConfigPaths from "./tsconfig.paths.json";

import { createWebpackAliasesFromTSConfig, createWebpackBabelIncludeFromTSConfig } from "@izui/scripts/utils/createAliases";

const argv = yargs(hideBin(process.argv)).options({
	mode: { type: "string", default: "production" },
	analyze: { type: "boolean", default: false }
}).argv as CLI;
console.log(`Building in ${argv.mode} mode.\n`);

const config: CracoConfig = {
	plugins: [
		{
			plugin: cracoBabelLoader,
			options: {
				includes: createWebpackBabelIncludeFromTSConfig(tsConfig)
			}
		}
	],
	webpack: {
		configure: webpackConfig =>
		{
			const graphqlLoader = {
				test: /\.(graphql|gql)$/,
				include: /(src)/,
				loader: "graphql-tag/loader"
			};
			addBeforeLoader(webpackConfig, loaderByName("babel-loader"), graphqlLoader);
			return webpackConfig;
		},
		plugins: {
			add: [
				new BundleHighlightPlugin(highlightConfig),
				new StylelintPlugin({ configFile: ".stylelintrc" }),
				when(argv.analyze, () => new BundleAnalyzerPlugin())
			].filter(Boolean)
		},
		alias: createWebpackAliasesFromTSConfig(tsConfigPaths)
	},
	eslint: {
		mode: ESLINT_MODES.file
	},
};

export type CLI = {
	mode: "none" | "development" | "production",
	analyze: boolean
};

export default config;
