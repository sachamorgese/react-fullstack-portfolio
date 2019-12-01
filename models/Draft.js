const mongoose = require('mongoose');

const { Schema } = mongoose;

const draftSchema = new Schema({
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
    ref: 'BlogPost',
  },
  created: { type: Date, default: Date.now },
  updated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Draft', draftSchema);
