import { memo, FC, ElementType } from "react";
import { useTranslation } from "react-i18next";
import { Typography, TypographyProps } from "@mui/material";
import { v4 as uuidv4 } from "uuid";

/**
 * Typography wrapper for multiple strings.
 */
const Text: FC<TextProps> = ({ children, raw, component = "h6", ...rest }) =>
{
	const { t } = useTranslation();
	const items = Array.isArray(children) ? children : [children];

	return (
		<>
			{items.map(item => (
				!raw ? (
					<Typography {...rest} component={component} key={uuidv4()}>
						{t(item)}
					</Typography>
				) : t(item)
			))}
		</>
	);
};

type TextProps = TypographyProps & {
	children: string[] | string,
	raw?: boolean,
	component?: ElementType
};

export default memo(Text);
