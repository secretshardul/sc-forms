import { Fragment } from "react"
import { useHistory } from "react-router-dom"

export default function FormLibraryScreen() {
    const history = useHistory()

    function fillForm() {
        history.push('/form')
    }
    return (
        <Fragment>
            <div>Library</div>
            <button onClick={fillForm}>Fill form</button>
        </Fragment>
    )
}