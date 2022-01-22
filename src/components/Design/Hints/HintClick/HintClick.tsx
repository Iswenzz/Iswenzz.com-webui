import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Tooltip, TooltipProps } from "@mui/material";

import { Forward, Image } from "components";
import { preventDefault } from "utils/events";
import clickMeIcon from "assets/images/misc/icons8-natural-user-interface-2-64.png";

/**
 * Click me hint.
 */
const HintClick: FC<Partial<TooltipProps>> = (props) =>
{
	const { t } = useTranslation();

	return (
		<Tooltip placement="right" title={t("TOOLTIP_CLICK_ME") as string}
			arrow disableFocusListener disableTouchListener {...props}>
			<Forward>
				<Image onDragStart={preventDefault} alt="click-me" width={55} height={64} src={clickMeIcon} />
			</Forward>
		</Tooltip>
	);
};

export default HintClick;
