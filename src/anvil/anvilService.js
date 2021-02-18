// import Anvil from '@anvilco/anvil'

const pdfTemplateID = 'OpiIRMeLZOJOP9GLwmLS'
const apiKey = 'yI1jAMxHeVK3tqERBQFllhTdwzCal9X9'
const baseUrl = 'https://graphql.useanvil.com'

// const anvilClient = new Anvil({ apiKey })

export default async function getFormData() {
    const query = `query getFormFields($organizationSlug: String!, $eidOrSlug: String!) {
        forge(organizationSlug: $organizationSlug, eidOrSlug: $eidOrSlug) {
            name
            config
        }
    }`
    const variables = { "organizationSlug": "gamepe-app", "eidOrSlug": "ao" }
    const response = await fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify({
            query,
            variables,
        }),
        headers: {
            authorization: 'Basic eUkxakFNeEhlVkszdHFFUkJRRmxsaFRkd3pDYWw5WDk6Og==',
        }
    })
    const responseJson = await response.json()
    console.log('got form', responseJson)

}
