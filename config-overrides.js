const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");

const StylelintPlugin = require("stylelint-webpack-plugin");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const { default: BundleHighlightPlugin } = require("@izui/scripts/build/webpack/bundleHighlight");

const highlightConfig = require("./src/config/highlight.json");
const tsConfig= require("./tsconfig.json");
const tsConfigPaths = require("./tsconfig.paths.json");

const {
	createWebpackAliasesFromTSConfig,
	createWebpackBabelIncludeFromTSConfig
} = require("@izui/scripts/build/utils/createAliases");

const {
	override,
	overrideDevServer,
	watchAll,
	addWebpackAlias,
	addWebpackPlugin,
	babelInclude,
} = require("customize-cra");

const argv = yargs(hideBin(process.argv)).options({
	mode: { type: "string", default: "production" },
	analyze: { type: "boolean", default: false }
}).argv;
console.log(`Building in ${argv.mode} mode.\n`);

module.exports.webpack = override(
	addWebpackAlias(createWebpackAliasesFromTSConfig(tsConfigPaths)),
	addWebpackPlugin(new BundleHighlightPlugin(highlightConfig)),
	addWebpackPlugin(new StylelintPlugin({ configPaths: ".stylelintrc" })),
	argv.analyze ? addWebpackPlugin(new BundleAnalyzerPlugin()) : null,
	babelInclude(createWebpackBabelIncludeFromTSConfig(tsConfig))
);

module.exports.devServer = overrideDevServer(
	watchAll()
);
