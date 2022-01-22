import { FC, useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import classNames from "classnames";
import axios from "axios";

import { DialogContent, DialogTitle, Fab, Grid, Tooltip, useTheme } from "@mui/material";
import { faOsi } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Close, Lock } from "@mui/icons-material";

import markdown from "App/utils/markdown";
import { Forward, Image, Loader } from "components";
import useResponsive from "utils/hooks/useResponsive";
import { preventDefault, stopPropagation } from "utils/events";

import { ProjectSource } from "../Project/Project";
import scss from "./ProjectRender.module.scss";

/**
 * Render the project markdown.
 */
const ProjectRender: FC<ProjectRenderProps> = ({ project, handleClose }) =>
{
	const { t } = useTranslation();
	const { theme } = useTheme();

	const [isFetched, setFetched] = useState<boolean>(false);
	const [fetchedMarkdown, setFetchedMarkdown] = useState<string>(t("PROJECT_WIP"));

	const { fabSize, imageSize } = useResponsive({
		desktop: { fabSize: "large", imageSize: "64px" },
		mobile: { fabSize: "small", imageSize: "42px" }
	});

	/**
	 * Fetch the markdown content.
	 */
	const fetchMarkdown = useCallback(async () =>
	{
		try
		{
			if (project.renderUrl)
			{
				const response = await axios.get<string>(project.renderUrl);
				setFetchedMarkdown(markdown(response.data));
				setFetched(true);
			}
		}
		catch { }
	}, [project.renderUrl]);

	useEffect(() => void fetchMarkdown(), [fetchMarkdown]);

	const openSource = (
		<Tooltip arrow disableFocusListener disableTouchListener title={t("PROJECT_TOOLTIP_SOURCE") as string}>
			<Fab size={fabSize as any} href={project.sourceURL} className={scss.tooltipFab} color="primary">
				<FontAwesomeIcon color="silver" icon={faOsi} size="2x" />
			</Fab>
		</Tooltip>
	);

	const privateSource = (
		<Tooltip arrow disableFocusListener disableTouchListener title={t("PROJECT_TOOLTIP_CLOSED_SOURCE") as string}>
			<span>
				<Fab size={fabSize as any} className={scss.tooltipFab} color="primary" disabled>
					<Lock />
				</Fab>
			</span>
		</Tooltip>
	);

	return (
		<article className={scss.article} key={uuidv4()}>
			<header className={scss.frame}>
				<DialogTitle className={scss.modalTitle}>
					<Grid className={scss.title} container justifyContent="space-between" alignItems="center">
						<ul className={scss.icons}>
							{project.renderIcons?.map(icon => (
								<li key={uuidv4()}>
									<Tooltip arrow disableFocusListener disableTouchListener title={icon.name}>
										<Forward>
											<Image width={imageSize} height={imageSize}
												onDragStart={preventDefault} src={icon.src} />
										</Forward>
									</Tooltip>
								</li>
							))}
						</ul>
						<div>
							{project.isOpenSource ? openSource : privateSource}
							<Fab onClick={handleClose} size={fabSize as any} className={scss.tooltipFab} color="secondary">
								<Close color="primary" />
							</Fab>
						</div>
					</Grid>
				</DialogTitle>
			</header>
			<section>
				<DialogContent onPointerDown={stopPropagation} className={scss.modal}>
					<section className={classNames("markdown", theme)}>
						{isFetched && <article dangerouslySetInnerHTML={{ __html: fetchedMarkdown }} />}
					</section>
				</DialogContent>
			</section>
			{!isFetched && <Loader className={scss.loader} />}
		</article>
	);
};

type ProjectRenderProps = {
	project: ProjectSource,
	handleClose: () => void
};

export default ProjectRender;
