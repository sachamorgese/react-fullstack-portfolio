const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  google: {
    id: String,
  },
  facebook: {
    id: String,
    token: String,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'mod', 'user'],
    default: 'user',
  },
});

mongoose.model('User', userSchema);
