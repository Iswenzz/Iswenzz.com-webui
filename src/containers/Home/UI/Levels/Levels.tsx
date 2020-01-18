import React, { FunctionComponent, useState } from 'react';
import RadialGradient from '../../../../components/RadialGradient/RadialGradient';
import { Grid, Typography } from '@material-ui/core';
import EmblaCarousel from '../../../../components/EmblaCarousel/EmblaCarousel';
import Spacing from '../../../../components/Spacing/Spacing';
import SplitText from 'react-pose-text';
import Level, { LevelProject } from '../Level/Level';
import '../../../../Text.scss';

const charPoses = {
	exit: { opacity: 0, y: 20 },
	enter: {
		opacity: 1,
		y: 0,
		delay: ({ charIndex }: any) => charIndex * 30
	}
};

const Levels: FunctionComponent = (): JSX.Element =>
{
	const [levels,] = useState<LevelProject[]>(require('./Levels.json'));

	return (
		<Grid container direction="column" justify="center" alignItems="center">

			{/* Level Design Title */}
			<Typography align="center" variant="h3" component="h2">
				<div className='calli-title'>
					<SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
						Level Design
					</SplitText>
				</div>
			</Typography>

			<Spacing height='200px' />

			{/* Level Design */}
			<RadialGradient position='ellipse at bottom' colors={[
			{ color: '#001C51', colorPercent: '0%' },
			{ color: '#090A0A', colorPercent: '100%' }]}>
				<EmblaCarousel style={{ padding: '5% 0 5% 0' }} height='700px' width='100%' 
				delayLength={10000} autoplay={false}>
					{levels.map((level: LevelProject) => (
						<Level levels={levels} currentLevel={level} />
					))}
				</EmblaCarousel>
				<Spacing height='1000px' />
			</RadialGradient>
			
		</Grid>
	);
}

export default Levels;