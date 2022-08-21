const { ApolloServer } = require('apollo-server');

require('dotenv').config();

const connectDB = require('./config/db.js');
const resolvers = require('./resolvers/resolvers.js');
const typeDefs = require('./schema/schema.tsx');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

connectDB();

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
