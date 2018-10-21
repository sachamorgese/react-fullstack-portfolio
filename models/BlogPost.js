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
  published: Boolean,
  created: Date,
  comments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Comment',
    },
  ],
});

mongoose.model('blogpostsNI' + '', blogPostSchema);
