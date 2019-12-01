const mongoose = require('mongoose');

const { Schema } = mongoose;

const blogPostSchema = new Schema({
  title: String,
  content: String,
  labels: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Labels',
    },
  ],
  draft: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Draft',
  },
  created: Date,
  updated: Date,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

module.exports = mongoose.model('BlogPost', blogPostSchema);
