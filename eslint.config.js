import config from "./packages/izui-web/eslint.config";

export default [
	...config,
	{
		ignores: ["src/api/generated/*"]
	}
]
