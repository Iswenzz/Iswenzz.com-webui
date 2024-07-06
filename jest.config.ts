import type { JestConfigWithTsJest } from "ts-jest";

import { createJestAliasesFromTSConfig } from "@izui/scripts/utils/createAliases";
import tsConfigPaths from "./tsconfig.paths.json";

const config: JestConfigWithTsJest = {
	watchAll: false,
	setupFilesAfterEnv: ["<rootDir>/src/__test__/setupTests.ts"],
	testMatch: ["<rootDir>/src/**/*.(test).{js,jsx,ts,tsx}"],
	transform: {
		"^.+\\.(js|jsx|ts|tsx)$": "ts-jest",
		"^.+\\.scss$": "@izui/scripts/mock/mockTransform",
		"^.+\\.(ico|png|jpg|webp|gif|svg)$": "@izui/scripts/mock/fileTransform"
	},
	moduleNameMapper: {
		...createJestAliasesFromTSConfig(tsConfigPaths, __dirname),
		".*\\.scss$": "identity-obj-proxy"
	},
	testEnvironment: "jsdom",
	moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json", "scss"],
	coverageDirectory: "coverage",
	coverageReporters: ["text", "cobertura", "lcov"],
	collectCoverage: true,
	collectCoverageFrom: [
		"!**/node_modules/**",
		"!**/__test__/**/*.{js,jsx,ts,tsx}",
		"<rootDir>/src/**/*.{js,jsx,ts,tsx}"
	]
};

export default config;
