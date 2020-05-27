const mongoose = require('mongoose');

const { Schema } = mongoose;

const labelSchema = new Schema({
  name: String,
});

mongoose.model('Label', labelSchema);
