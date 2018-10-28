const mongoose = require('mongoose');

const { Schema } = mongoose;
const { labelSchema } = require('./Label');

// create a schema
const toDoSchema = new Schema(
  {
    itemId: Number,
    item: String,
    completed: Boolean,
    labels: [labelSchema],
  },
  { collection: 'TodoList' },
);
// we need to create a model using it

module.exports = mongoose.model('ToDos', toDoSchema);
