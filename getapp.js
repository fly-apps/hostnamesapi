#!/usr/bin/env node
const { request, GraphQLClient } = require('graphql-request')

const argv = require('yargs')
    .demandOption(["appname"])
    .alias('a', 'appname')
    .argv;

async function main() {
    const endpoint = "https://fly.io/api/v2/graphql"

    const FlyAPIClient = new GraphQLClient(endpoint, {
        headers: {
            authorization: 'Bearer ' + process.env.FLY_API_TOKEN
        }
    })

    const query = `
        query($appName: String!) {
			app(name: $appName) {
                id
				}
			}`

    const variables = { appName: argv.appname };

    const data = await FlyAPIClient.request(query, variables)
    console.log(JSON.stringify(data, undefined, 2));
}

main().catch(error => console.error(error));
