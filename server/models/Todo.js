const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  isCompleted: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Todo', TodoSchema);
