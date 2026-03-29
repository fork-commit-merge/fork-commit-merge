// GraphQL - Easy
// GraphQL + express doesn't support now

import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

const typeDefs = `
    type Query {
        hello: String
    }
`;

const resolvers = {
    // TODO: Implement the `hello` query resolver here
    Query: {
        hello: () => "Hello, GraphQL!"
    }
};

const startServer = async () => {
    const server = new ApolloServer({ typeDefs, resolvers });
    const { url } = await startStandaloneServer(server, {
        listen: { port: 4000 }
    })
    console.log(`Server ready at: ${url}`)
};

startServer();
