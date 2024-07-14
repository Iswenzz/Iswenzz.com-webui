import { FC } from "react";
import { useTranslation } from "react-i18next";
import { v4 as uuidv4 } from "uuid";
import { FaOsi } from "react-icons/fa";
import { MdClose, MdLock } from "react-icons/md";
import { DialogContent, DialogTitle, Fab, Grid, Tooltip } from "@mui/material";

import {
	Forward,
	Image,
	Loader,
	useResponsive,
	preventDefault,
	stopPropagation,
	Markdown,
	useFile
} from "@izui/react";

import { ProjectSource } from "../Project/Project";
import scss from "./ProjectRender.module.scss";

/**
 * Render the project markdown.
 */
const ProjectRender: FC<Props> = ({ project, handleClose }) => {
	const { t } = useTranslation();
	const { file: markdown = t("PROJECT_WIP") || "", isLoading } = useFile(project.renderUrl);

	const { fabSize, imageSize } = useResponsive({
		desktop: { fabSize: "large", imageSize: "64px" },
		mobile: { fabSize: "small", imageSize: "42px" }
	});

	const openSource = (
		<Tooltip
			arrow
			disableFocusListener
			disableTouchListener
			title={t("PROJECT_TOOLTIP_SOURCE") as string}
		>
			<Fab
				size={fabSize as "medium"}
				href={project.sourceURL}
				className={scss.tooltipFab}
				color="primary"
			>
				<FaOsi color="silver" />
			</Fab>
		</Tooltip>
	);

	const privateSource = (
		<Tooltip
			arrow
			disableFocusListener
			disableTouchListener
			title={t("PROJECT_TOOLTIP_CLOSED_SOURCE") as string}
		>
			<span>
				<Fab
					size={fabSize as "medium"}
					className={scss.tooltipFab}
					color="primary"
					disabled
				>
					<MdLock />
				</Fab>
			</span>
		</Tooltip>
	);

	return (
		<article className={scss.article} key={uuidv4()}>
			<header className={scss.frame}>
				<DialogTitle className={scss.modalTitle}>
					<Grid
						className={scss.title}
						container
						justifyContent="space-between"
						alignItems="center"
					>
						<ul className={scss.icons}>
							{project.renderIcons?.map(icon => (
								<li key={uuidv4()}>
									<Tooltip
										arrow
										disableFocusListener
										disableTouchListener
										title={icon.name}
									>
										<Forward>
											<Image
												width={imageSize}
												height={imageSize}
												onDragStart={preventDefault}
												src={icon.src}
											/>
										</Forward>
									</Tooltip>
								</li>
							))}
						</ul>
						<div>
							{project.isOpenSource ? openSource : privateSource}
							<Fab
								onClick={handleClose}
								size={fabSize as "medium"}
								className={scss.tooltipFab}
								color="secondary"
							>
								<MdClose color="deeppink" />
							</Fab>
						</div>
					</Grid>
				</DialogTitle>
			</header>
			<section>
				<DialogContent onPointerDown={stopPropagation} className={scss.modal}>
					<Markdown>{markdown}</Markdown>
				</DialogContent>
			</section>
			{isLoading && <Loader className={scss.loader} />}
		</article>
	);
};

type Props = {
	project: ProjectSource;
	handleClose: () => void;
};

export default ProjectRender;
