#!/usr/bin/env node
const { request, GraphQLClient } = require('graphql-request')

const argv = require('yargs')
    .demandOption(['appname', 'hostname'])
    .alias('a', 'appname')
    .alias('h', 'hostname')
    .argv;

async function main() {
    const endpoint = "https://fly.io/api/v2/graphql"

    const FlyAPIClient = new GraphQLClient(endpoint, {
        headers: {
            authorization: 'Bearer ' + process.env.FLY_API_TOKEN
        }
    })

    const query = `
    mutation($appId: ID!, $hostname: String!) {
        deleteCertificate(appId: $appId, hostname: $hostname) {
            app {
                name
            }
            certificate {
                hostname
                id
            }
        }
    }
`
    const variables = { appId: argv.appname, hostname: argv.hostname };

    const data = await FlyAPIClient.request(query, variables)
    console.log(JSON.stringify(data, undefined, 2));
}

main().catch(error => console.error(error));
