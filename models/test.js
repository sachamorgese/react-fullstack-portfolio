const mongoose = require('mongoose');

const { Schema } = mongoose;

// create a schema
const toDoSchema = new Schema(
  {
    itemId: Number,
    item: String,
    completed: Boolean,
  },
  { collection: 'TodoList' },
);
// we need to create a model using it

mongoose.model('ToDos', toDoSchema);
