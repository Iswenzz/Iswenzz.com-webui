import React, { memo, Component } from 'react';
import TrailText from 'components/TrailText/TrailText';
import { Grid, Container, Divider } from '@material-ui/core';
import VisibilitySensor from "react-visibility-sensor";
import 'Text.scss';

const intro = {
	header: `Hello there!`,
	title: `My name is Alexis, I'm a Software Engineer and a Level Designer.`,
	desc: `I've experience working on a diverse set of programming topics for the past 5 years 
	such as software development, web development, database design, graphics programming, game development,
	UI/UX design, and reverse engineering.`
}

class IntroText extends Component
{
	render(): JSX.Element
	{
		return (
			<VisibilitySensor partialVisibility>
			{({ isVisible }) => (
				<Grid style={{paddingTop: '100px', paddingBottom: '100px'}} container direction="row" 
				justify="center" alignItems="center">
					{/* About me */}
					<Container maxWidth="md">
						<TrailText align="left" color="textPrimary" component="h1" variant="h1"
						className='poiret-h1' active={isVisible} items={[intro.header]} />
						<Divider style={{ width: '350px', height: '2px', marginTop: '16px', marginBottom: '16px' }} />
						<TrailText align="left" style={{marginTop: '16px', marginBottom: '16px'}} 
						color="textPrimary" component="h3" variant="h3"
						className='ubuntu-h3' active={isVisible} items={[intro.title]} />
						<TrailText align="left" color="textPrimary" paragraph component="h4" variant="h4"
						className='ubuntu-h4' active={isVisible} items={[intro.desc]} />
					</Container>
				</Grid>
			)}
			</VisibilitySensor>
		);
	}
}

export default memo(IntroText);