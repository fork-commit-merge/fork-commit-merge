// GraphQL - Easy
// Issue created by navneet-97 - https://github.com/navneet-97

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

const typeDefs = `
    type Query {
        hello: String
    }
`;

const resolvers = {
    // TODO: Implement the `hello` query resolver here
};

const startServer = async () => {
    const server = new ApolloServer({ typeDefs, resolvers });
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 }
    })
    console.log(`Server ready at: ${url}`)
};

startServer();
