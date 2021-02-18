import * as download from 'downloadjs'

const baseUrl = 'https://us-central1-sc-forms-backend.cloudfunctions.net/app/'
// const baseUrl = 'http://localhost:5001/sc-forms-backend/us-central1/app/'

async function userExists(id) {
    const response = await fetch(baseUrl + 'userPresent/' + id)
    const responseBody = await response.text()

    return (responseBody === 'true')
}

async function verifyUser (id, typingPattern) {
    console.log('verifying', id)
    const response = await fetch(baseUrl + 'verify/' + id, {
        method: 'POST',
        body: new URLSearchParams({
            tp: typingPattern,
        }),
    })
    const responseBody = await response.text()
    return (responseBody === 'true')
}

async function getFormData (formSlug) {
    console.log('getting form', formSlug)
    const response = await fetch(baseUrl + 'form/' + formSlug)
    console.log('got response', response)
    const responseBody = await response.json()
    console.log('got response json', responseBody)
    return responseBody
}

async function getFilledForm (formSlug, formData) {
    console.log('getting form', formSlug)
    const response = await fetch(baseUrl + 'form/' + formSlug, {
        method: 'POST',
        body: JSON.stringify({
            "districtInformation0": "District Information",
            "plaintiff1": "Plaintiff",
            "defendant6": "Defendant",
            "caseNumber7": "Case Number",
            "attorneyName8": "Attorney Name",
            "dateToday9": "2021-02-18",
            "attorneyPrintedName11": "Attorney Printed Name",
            "attorneyAddress12": "Attorney Address",
            "attorneyEMail13": "testy@example.com",
            "attorneyTelephoneNumber14": "Attorney telephone number",
            "attorneyFax15": "Attorney Fax"
        }),
    })
    console.log('got response', response)
    const blob = await response.blob()
    download(blob)
}

export {
    userExists,
    verifyUser,
    getFormData,
    getFilledForm,
}
