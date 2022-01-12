import { FC, memo } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useMediaQuery } from "react-responsive";

import "./Paper.scss";

const Paper: FC<PaperProps> = ({ className, paperStyle, title, description, image, previewStyle }) =>
{
	const isPortrait = useMediaQuery({ orientation: "portrait" });
	const isTabletOrMobileDevice = useMediaQuery({ query: "(max-device-width: 1224px)" });

	const mobilePaper = (
		<Grid container justify={"center"} alignItems={"center"} className={`paper-mobile ${className}`}>
			<Grid container direction={"column"} justify={"space-evenly"}
				  alignItems={"center"} className={"paper-mobile-container"} style={paperStyle}>
				<header>
					<Typography align={"center"} component={"h2"} variant={"h2"}>
						{title}
					</Typography>
				</header>
				<Grid container direction={"column"} justify={"center"} alignItems={"center"}>
					<section className={"paper-mobile-preview"} style={previewStyle}>
						<img src={image} alt={"Presentation Paper"} />
					</section>
					<Typography component={"p"} paragraph>
						{description}
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);

	const desktopPaper = (
		<Grid container justify={"center"} alignItems={"center"} className={`paper ${className}`}>
			<Grid container direction={"column"} justify={"space-evenly"}
				  alignItems={"center"} className={"paper-container"} style={paperStyle}>
				<header>
					<Typography align={"center"} component={"h2"} variant={"h2"}>
						{title}
					</Typography>
				</header>
				<Container>
					<Typography component={"p"} paragraph>
						{description}
					</Typography>
				</Container>
				<section className={"paper-preview"} style={previewStyle}>
					<img src={image} alt={"Presentation Paper"} />
				</section>
			</Grid>
		</Grid>
	);

	return isTabletOrMobileDevice || isPortrait ? mobilePaper : desktopPaper;
};

export type PaperProps = {
	title?: string,
	description?: string | JSX.Element,
	image?: string,
	className?: string,
	previewStyle?: React.CSSProperties,
	paperStyle?: React.CSSProperties
};

export default memo(Paper);
