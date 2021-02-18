const baseUrl = 'https://us-central1-sc-forms-backend.cloudfunctions.net/app/'

async function userExists(id) {
    const response = await fetch(baseUrl + 'userPresent/' + id)
    const responseBody = await response.text()

    return (responseBody === 'true')
}

async function verifyUser (id, typingPattern) {

    return true
}

export {
    userExists,
    verifyUser,
}
