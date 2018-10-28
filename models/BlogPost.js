const mongoose = require('mongoose');
const { labelSchema: labelMongoSchema } = require('./Label');
const { commentSchema } = require('./Comment');

const { Schema } = mongoose;

const blogPostSchema = new Schema({
  title: String,
  content: String,
  labels: [labelMongoSchema],
  published: Boolean,
  created: Date,
  comments: [commentSchema],
});

module.exports = {
  blogPostSchema,
  blogPostSchemaModel: mongoose.model('blogposts', blogPostSchema),
};
