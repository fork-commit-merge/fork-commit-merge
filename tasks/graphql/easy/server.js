// GraphQL - Easy

const { ApolloServer, gql } = require("apollo-server-express");
const express = require("express");

const typeDefs = gql`
    type Query {
        hello: String
    }
`;

const resolvers = {
    // TODO: Implement the `hello` query resolver here
};

const startServer = async () => {
    const app = express();
    const server = new ApolloServer({ typeDefs, resolvers });

    await server.start();
    server.applyMiddleware({ app });

    app.listen({ port: 4000 }, () =>
        console.log(
            `🚀 Server ready at http://localhost:4000${server.graphqlPath}`
        )
    );
};

startServer();
