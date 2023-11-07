import { GraphQLClient } from 'graphql-request'
import { getSdk } from './types'

const gqlClient = new GraphQLClient("http://localhost:8080/v1/graphql", {
  headers: { 'x-hasura-admin-secret': "secret" },
})

export const client = getSdk(gqlClient)