import React, { FunctionComponent, memo } from 'react';
import { Parallax } from 'react-parallax';
import SplitText from 'react-pose-text';
import { Grid, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import './IntroHeader.scss';

const charPoses = {
	exit: { opacity: 0, y: 20 },
	enter: {
		opacity: 1,
		y: 0,
		delay: ({ charIndex }: any) => charIndex * 30
	}
};

export interface IntroHeaderProps
{
	title?: string,
	desc?: string,
	spaceTop?: string,
	spaceBottom?: string,
	bgImage: string,
	parallaxStrength?: number,
	parallaxBlur?: number
}

const IntroHeader: FunctionComponent<IntroHeaderProps> = (props: IntroHeaderProps): JSX.Element =>
{
	return (
		<div style={{height: '100vh'}}>
			<Parallax style={{boxShadow: '0 0 5px 6px rgba(60, 60, 60, .3)'}} 
			bgImage={props.bgImage} bgImageAlt="index" blur={props.parallaxBlur || 0}
			strength={props.parallaxStrength || 400}>
				<Grid container className="introheader-grid" direction="column" justify="center" alignItems="center">
					<Typography className="calli-h1 bold noselect" align="center" variant="h1" component="h1">
						<SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
							{props.title}
						</SplitText>
					</Typography>
					<Typography className="poiret bold noselect" align="center" variant="h3" component="h3">
						<SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
							{props.desc}
						</SplitText>
					</Typography>
					<Link to="intro-section" offset={5} smooth>
						<FontAwesomeIcon icon={faChevronDown} size="3x" className="introheader-arrow" />
					</Link>
				</Grid>
			</Parallax>
		</div>
	);
}

export default memo(IntroHeader);