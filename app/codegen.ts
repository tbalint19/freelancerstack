import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: [
    {
      ["http://localhost:8080/v1/graphql"]: {
        headers: {
          'x-hasura-admin-secret': "secret",
        },
      },
    },
  ],
  generates: {
    './src/gql/types.ts': {
      documents: [
        './src/gql/queries/index.gql',
      ],
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
      config: {
        scalars: {
          timestamptz: 'string',
          uuid: 'string',
        },
      },
    },
  },
};

export default config;
