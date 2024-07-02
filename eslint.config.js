import config from "./packages/izui-web/eslint.config.js";

export default [
	...config,
	{
		ignores: ["src/api/generated/*"]
	}
]
