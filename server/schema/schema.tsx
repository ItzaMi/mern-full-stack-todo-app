const { gql } = require('apollo-server');

const typeDefs = gql`
  type Todo {
    id: ID!
    title: String!
    description: String!
    isCompleted: Boolean!
  }

  type Query {
    allTodos: [Todo]!
  }

  type Mutation {
    addTodo(title: String!, description: String!): Todo
  }

  type Mutation {
    markTodoAsCompleted(id: ID!): Todo
  }
`;

module.exports = typeDefs;
