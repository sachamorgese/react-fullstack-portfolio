const mongoose = require('mongoose');

const { Schema } = mongoose;

const labelSchema = new Schema({
  name: String,
});

module.exports = {
  labelSchema,
  labelModel: mongoose.model('Label', labelSchema),
};
