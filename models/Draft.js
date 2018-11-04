const mongoose = require('mongoose');

const { Schema } = mongoose;

const blogPostSchema = new Schema({
  title: String,
  content: String,
  labels: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Label',
    },
  ],
  publishedPost: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Label',
  },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Draft', blogPostSchema);
