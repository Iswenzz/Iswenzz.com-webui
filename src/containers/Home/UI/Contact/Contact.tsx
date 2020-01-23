import React, { FunctionComponent, memo, useState } from 'react';
import RadialGradient from '../../../../components/RadialGradient/RadialGradient';
import { Grid, Typography, Container, Avatar, TextField, Button, makeStyles } from '@material-ui/core';
import axios from 'axios';
import Spacing from '../../../../components/Spacing/Spacing';
import SplitText from 'react-pose-text';
import posed, { PoseGroup } from 'react-pose';
import VisibilitySensor from "react-visibility-sensor";
import '../../../../Text.scss';
import { useMediaQuery } from 'react-responsive';

const charPoses = {
    exit: { opacity: 0, y: 20 },
    enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }: any) => charIndex * 30
    }
};

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        width: '120px',
        height: '120px'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(4, 0, 2),
    },
}));

export interface ContactState
{
    email?: string,
    subject?: string,
    message?: string
}

const Animation = posed.div({
	enter: { 
		y: '0%', 
		opacity: 1,
		scale: 1,
		transition: { 
			duration: 1000,
			ease: 'easeOut'
		}
	},
	exit: {
		y: '0%',
		opacity: 0,
		scale: 2.6,
		transition: { 
			duration: 1000,
			ease: 'easeIn'
		}
	}
});

const Contact: FunctionComponent = (): JSX.Element =>
{
    const isTabletOrMobileDevice = useMediaQuery({ query: '(max-device-width: 1224px)' });
    const classes = useStyles();
    const [state, setState] = useState<ContactState>({
        email: undefined,
        subject: undefined,
        message: undefined
    });

    const onMailChange = (event: any): void => 
    {
        event.persist();
        setState(prevState => ({ ...prevState, email: event.target.value }));
    }

    const onSubjectChange = (event: any): void => 
    {
        event.persist();
        setState(prevState => ({ ...prevState, subject: event.target.value }));
    }

    const onMessageChange = (event: any): void => 
    {
        event.persist();
        setState(prevState => ({ ...prevState, message: event.target.value }));
    }

    const sendEmail = async (e: any): Promise<void> =>
    {
        e.preventDefault();
        // if the form as valid information send a post req
        if (Object.values(state).every(item => item !== undefined && item !== null))
        {
            await axios.post('http://localhost:3001/contact', state, { 
                headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' } 
            }).catch(err => console.log(err)).then(res => console.log(res));
        }
    }

    return (
        <VisibilitySensor partialVisibility offset={{bottom: 500}}>
        {({ isVisible }) => (
            <Grid container direction="column" justify="center" alignItems="center">

                {/* Contact Title */}
                <Typography align="center" variant="h3" component="h2">
                    <div className='calli-title'>
                        <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                            Contact
                        </SplitText>
                    </div>
                </Typography>

                <Spacing height='200px' />

                {/* Contact */}
                <RadialGradient position='ellipse at bottom' colors={[
                { color: '#51001C', colorPercent: '0%' },
                { color: '#090A0A', colorPercent: '100%' }]}
                style={{ paddingTop: '70px', paddingBottom: '120px' }}>
                    <PoseGroup>
                    {isVisible && [
                        <Animation key="contact-anim">
                        <Grid container direction="row" justify="center" alignItems="center">
                        <Container className={classes.paper} maxWidth="md">
                            <Avatar alt='iswenzz avatar' src={require('../../../../assets/images/misc/iswenzz.png')} 
                            className={classes.avatar} />
                            <form onSubmit={sendEmail} className={classes.form}>
                                <TextField name="email" id="email" color="secondary" variant="outlined" 
                                margin="normal" required fullWidth label="Email Address" autoComplete="email" 
                                onChange={onMailChange} />
                                <TextField name="subject" id="subject" color="secondary" variant="outlined" 
                                margin="normal" required fullWidth label="Subject"
                                onChange={onSubjectChange} />
                                <TextField name="message" id="message" multiline rows="6" color="secondary" 
                                variant="outlined" margin="normal" required fullWidth label="Message"
                                onChange={onMessageChange} />
    
                                <Container maxWidth="xs">
                                    <Button fullWidth className={classes.submit} type="submit" variant="contained" 
                                    color="secondary">
                                        Send
                                    </Button>
                                </Container>
                            </form>
                        </Container>
                        </Grid>
                        </Animation>
                    ]}
                    </PoseGroup>
                    <Spacing height={isTabletOrMobileDevice ? '50px' : '600px'} />
                </RadialGradient>
                
            </Grid>
        )}
        </VisibilitySensor>
    );
}

export default memo(Contact);