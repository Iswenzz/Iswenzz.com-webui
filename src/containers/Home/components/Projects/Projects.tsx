import { FC, memo } from "react";
import { Grid, Divider, Container, useTheme } from "@mui/material";
import { Spacing, TrailText, Gradient, GradientProps } from "Components";
import usePortrait from "utils/hooks/usePortrait";
import useTabletOrMobile from "utils/hooks/useTabletOrMobile";
import { Element } from "react-scroll";
import "./Projects.scss";

/**
 * Stonecutter responsive grid container with all Project cards.
 */
export const Projects: FC = (): JSX.Element =>
{
	const isPortrait = usePortrait();
	const isTabletOrMobile = useTabletOrMobile();
	// const projects = useSelector(getProjects);
	const { isDarkTheme } = useTheme();

	const config: GradientProps = isDarkTheme ? {
		gradientPosition: `${isTabletOrMobile ? "circle" : "ellipse"} at center`, 
		colors: [
			{ color: "#3c0084", colorPercent: "0%" },
			{ color: "#0e0f14", colorPercent: "50%" }
		]
	} : {
		linear: true,
		gradientPosition: "144deg", 
		colors: [
			{ color: "#ffffff" },
			{ color: "#f4f4f4" }
		]
	};

	/**
	 * Stonecutter grid config.
	 */
	// const gridConfig: SpringGridProps = { 
	// 	component: "ul", 
	// 	columns: 5,
	// 	perspective: 600, 
	// 	columnWidth: isTabletOrMobile ? 85 : 200, gutterWidth: 30, 
	// 	gutterHeight: isTabletOrMobile ? -70 : 0, 
	// 	layout: isTabletOrMobile ? layout.simple : layout.pinterest,
	// 	springConfig: { 
	// 		stiffness: 100, 
	// 		damping: 12 
	// 	} 
	// };

	return (
		<section className="projects">
			<Element name="projects-section" />
			<Gradient config={config} className="projects-gradient-grid">
				<Container component="header" className="projects-container">
					<TrailText i18n align="center" color="textPrimary" component="h2" variant="h2"
						className="poiret-h1 noselect" active items={["PROJECTS"]} />
					<Divider className="projects-divider" />
				</Container>
				<Grid container component="section" direction="row" alignItems="center" justifyContent="center">
					{/* <StonecutterGrid responsive animStyle={enterExitStyle.skew} config={gridConfig}>
						{projects!.map((project: LinkedProjectProps) => {
							const r = isTabletOrMobile ? undefined : random(100, 220);
							return (
							// @ts-ignore - for itemHeight custom attribute
								<li key={project.title} itemHeight={r}> 
									<Project projects={projects!} currentProj={project}
										itemHeight={r} /> 
								</li>
							);
						})}
					</StonecutterGrid> */}
				</Grid>
				<Spacing height={isPortrait ? "1500px" : isTabletOrMobile ? "500px" : "1000px"} />
			</Gradient>     
		</section>
	);
};

export default memo(Projects);
