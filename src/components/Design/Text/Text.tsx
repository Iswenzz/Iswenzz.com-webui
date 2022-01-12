import { memo, FC, ElementType } from "react";
import { Trans } from "react-i18next";
import { Typography, TypographyProps } from "@material-ui/core";
import { v4 as uuidv4 } from "uuid";

/**
 * Typography wrapper for multiple strings.
 */
const Text: FC<TextProps> = ({ items, i18n, component = "h6", ...rest }) => (
	<>
		{items.map(item => (
			<Typography {...rest} component={component} key={uuidv4()}>
				{i18n ? <Trans>{item}</Trans> : item}
			</Typography>
		))}
	</>
);

type TextProps = TypographyProps & {
	items: string[],
	component?: ElementType,
	i18n?: boolean
};

export default memo(Text);
