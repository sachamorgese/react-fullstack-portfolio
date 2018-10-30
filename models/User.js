const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  google: {
    id: String,
    token: String,
    email: String,
    name: String,
  },
  facebook: {
    id: String,
    token: String,
    email: String,
    name: String,
  },
});

mongoose.model('User', userSchema);
