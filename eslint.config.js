import config from "./packages/izui-web/packages/izui-react/eslint.config.js";

export default [
	...config,
	{
		ignores: ["src/api/generated/*"]
	}
]
