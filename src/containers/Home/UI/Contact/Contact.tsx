import React, { FunctionComponent, memo } from 'react';
import RadialGradient from '../../../../components/RadialGradient/RadialGradient';
import { Grid, Typography, Container, Avatar, TextField, Button, makeStyles } from '@material-ui/core';
import Spacing from '../../../../components/Spacing/Spacing';
import '../../../../Text.scss';
import SplitText from 'react-pose-text';

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
        width: '80px',
        height: '80px'
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const Contact: FunctionComponent = (): JSX.Element =>
{
    const classes = useStyles();

    return (
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
            { color: '#090A0A', colorPercent: '100%' }]}>
                <Container maxWidth="md">
                    <Grid container direction="row" justify="center" alignItems="center">
                        <Avatar alt='iswenzz avatar' src={require('../../../../assets/images/misc/iswenzz.png')} 
                        className={classes.avatar} />
                        <form className={classes.form} noValidate>
                            <TextField color="secondary" variant="outlined" margin="normal" required fullWidth id="email"
                            label="Email Address" name="email" autoComplete="email" />
                            <TextField color="secondary" variant="outlined" margin="normal" required fullWidth id="subject"
                            label="Subject" name="subject" />
                            <TextField multiline rows="6" color="secondary" variant="outlined" 
                            margin="normal" required fullWidth id="message" label="Message" name="message" />

                            <Container maxWidth="xs">
                                <Button fullWidth className={classes.submit} type="submit" variant="contained" 
                                color="secondary">
                                    Send
                                </Button>
                            </Container>
                        </form>
                    </Grid>
                </Container>
                <Spacing height='800px' />
            </RadialGradient>
            
        </Grid>
    );
}

export default memo(Contact);