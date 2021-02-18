import React, { Fragment, useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ButtonAppBar from "../AppBar"
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'
import { useHistory } from "react-router-dom"
import FormCard from '../FormCard'
import formImage1 from '../images/ao-458.png'
import formImage2 from '../images/ao-78.png'
import formImage3 from '../images/ao-83.png'
import formImage4 from '../images/ao-91.png'
import formImage5 from '../images/ao-93.png'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        textAlign: 'center'
    },
}))

export default function FormLibraryScreen () {
    const classes = useStyles()
    const history = useHistory()

    function fillForm() {
        history.push('/form')
    }

    return (
        <Fragment>
            <ButtonAppBar />
            <Container align="center" justify="center" alignItems="center">

                <Grid container spacing={10}
                    style={{ paddingTop: '24px' }}
                >
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
                        <FormCard name="AO 458" description="Appearance of counsel" image={formImage1} onClick={fillForm}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
                        <FormCard name="AO 78" description="Application for Judicial Employment" image={formImage2} onClick={fillForm}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
                        <FormCard name="AO 83" description="Summons in a Criminal Case" image={formImage3} onClick={fillForm}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
                        <FormCard name="AO 91" description="Criminal Complaint" image={formImage4} onClick={fillForm}/>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={3}>
                        <FormCard name="AO 93" description="Search and Seizure Warrant" image={formImage5} onClick={fillForm}/>
                    </Grid>
                </Grid>
            </Container>
        </Fragment>
    )
}
