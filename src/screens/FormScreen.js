import { useEffect, useState } from "react"
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { getFormData, getFilledForm, savePattern } from '../Api'
import { Button, TextField, Typography } from "@material-ui/core"
import { useHistory } from "react-router-dom"

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
        marginTop: theme.spacing(3)
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}))


export default function FormScreen ({ tdna, email }) {
    const classes = useStyles()
    const [formData, setFormData] = useState([])
    const [formName, setFormName] = useState('')
    const [formInput, setFormInput] = useState([])
    const history = useHistory()

    useEffect(() => {
        async function readData() {
            try {
                const data = await getFormData('OpiIRMeLZOJOP9GLwmLS')
                setFormName(data.name)
                const fields = data.fieldInfo.fields
                console.log('Got fields', fields)
                setFormData(fields)
            } catch(error) {
                console.log(error)
            }

        }
        readData()
    }, [])

    async function getPattern() {
        const tp = tdna.getTypingPattern({
            type: 0,
            length: 160
        })
        console.log(tp)
        await savePattern(email, tp)
    }

    function formComponent (field) {
        let component = (
            <TextField
                key={field.id}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id={field.id}
                label={field.name}
                onChange={(event) => {
                    setFormInput({
                        ...formInput,
                        [field.id]: event.target.value,
                    })
                }}
                onClick={getPattern}
            />
        )
        return component
    }

    async function submit() {
        console.log('Entered data', formInput)
        await getFilledForm('OpiIRMeLZOJOP9GLwmLS', formInput)
        history.push('/saved-forms')
    }

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
                        onClick={submit}
                    >
                        Submit
                    </Button>
                )
            }

        </Container>
    )
}