import hljs from "highlight.js/lib/core";
import type { LanguageFn } from "highlight.js";

export const languages: Record<string, LanguageFn> = {
	typescript: require("highlight.js/lib/languages/typescript"),
	javascript: require("highlight.js/lib/languages/javascript"),
	java: require("highlight.js/lib/languages/java"),
	c: require("highlight.js/lib/languages/c"),
	cpp: require("highlight.js/lib/languages/cpp"),
	csharp: require("highlight.js/lib/languages/csharp"),
	json: require("highlight.js/lib/languages/json"),
	xml: require("highlight.js/lib/languages/xml"),
	yaml: require("highlight.js/lib/languages/yaml"),
	python: require("highlight.js/lib/languages/python"),
	php: require("highlight.js/lib/languages/php"),
	bash: require("highlight.js/lib/languages/bash"),
	shell: require("highlight.js/lib/languages/shell"),
	powershell: require("highlight.js/lib/languages/powershell"),
	cmake: require("highlight.js/lib/languages/cmake"),
	makefile: require("highlight.js/lib/languages/makefile"),
	css: require("highlight.js/lib/languages/css"),
	scss: require("highlight.js/lib/languages/scss")
};

// Register configured languages
Object.entries(languages).forEach(([languageName, language]) =>
	hljs.registerLanguage(languageName, language)
);
