import { useEffect, useState } from "react"
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { getFormData } from '../Api'
import { Button, TextField, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))

function formComponent(field) {
    let component = (
        <TextField
            key={field.id}
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id={field.id}
            label={field.label}
        />
    )
    return component
}
export default function FormScreen () {
    const classes = useStyles()
    const [formData, setFormData] = useState([])
    const [formName, setFormName] = useState('')
    useEffect(() => {
        async function readData() {
            const data = await getFormData('ao')
            setFormName(data.name)
            console.log('Got fields', data.config.pages[0].fields)
            setFormData(data.config.pages[0].fields)
        }
        readData()
    }, [])

    return (
        <Container maxWidth="sm" className={classes.root}>
            <Typography variant="h4">{formName}</Typography>
            {
                formData.map(field => formComponent(field))
            }
            {
                formData.length > 0 && (
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        className={classes.submit}
                    >
                        Submit
                    </Button>
                )
            }

        </Container>
    )
}