import React, { FC, ReactNode } from "react";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Grid, Typography } from "@material-ui/core";

import "./MediaCard.scss";

/**
 * Media card component.
 */
const MediaCard: FC<MediaCardProps> = ({ className, mediaClass, image, icon, title, description, children }) => (
	<Card className={`mediacard ${className}`}>
		{image && (
			<CardActionArea component={"header"}>
				<CardMedia component={"img"} className={mediaClass} image={image} title={title} />
			</CardActionArea>
		)}
		{icon && (
			<figure>
				{icon}
			</figure>
		)}
		<Grid component={"section"} className={"mediacard-container"} container direction={"column"}
			  alignItems={"center"} justify={"space-between"}>
			<CardContent>
				<Typography gutterBottom variant="h5" component="h2">
					{title}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
					{description}
				</Typography>
			</CardContent>
			<CardActions className={"mediacard-actions"}>
				{children}
			</CardActions>
		</Grid>
	</Card>
);

export type MediaCardProps = React.HTMLProps<HTMLElement> & {
	image?: string,
	mediaClass?: string,
	description?: string,
	height?: number | string,
	width?: number | string,
	icon?: ReactNode
};

export default MediaCard;
