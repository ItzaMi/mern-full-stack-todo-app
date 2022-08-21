const Todo = require('../models/Todo');

const resolvers = {
  Query: {
    async allTodos() {
      return await Todo.find();
    },
  },
  Mutation: {
    addTodo(parent, args) {
      const todo = new Todo({
        title: args.title,
        description: args.description,
        isCompleted: false,
      });

      return todo.save();
    },
    async markTodoAsCompleted(parent, args) {
      return await Todo.findByIdAndUpdate(args.id, { isCompleted: true });
    },
  },
};

module.exports = resolvers;
