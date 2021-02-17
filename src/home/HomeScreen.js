import React from 'react'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Icon from '@material-ui/core/Icon';
import {
    useHistory,
} from "react-router-dom";
import logo from '../images/balance.svg';
import { userExists } from '../TypingDNA/TypingDnaApi'

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://i1.wp.com/mogollonrimnews.com/wp-content/uploads/2017/02/SupremeCt.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(7),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    imageIcon: {
        // height: '100%',
        maxHeight: 70
    },
    iconRoot: {
        // textAlign: 'center'
        maxHeight: 40

    },
}))

export default function HomeScreen ({ setEmail }) {
    const classes = useStyles()
    const history = useHistory()

    async function signIn() {
        // console.log('Checking if exists')
        // try {
        //     const userFound = await userExists('example@gmail.com')
        // } catch(error) {
        //     console.error(error)
        // }

        history.push('/verify')

    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <img className={classes.imageIcon} src={logo} />
                    <Typography variant="h4">
                        Court.ly
                    </Typography>
                    <Typography variant="subtitle1">
                        Court forms made simple
                    </Typography>
                    <div className={classes.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={event => {
                                console.log('entered', event.target.value)
                                setEmail(event.target.value)
                            }}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={signIn}
                        >
                            Sign In
                        </Button>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}
