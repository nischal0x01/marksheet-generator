const mongoose = require('mongoose');

const photoSchema = new mongoose.Schema({
  image: { type: Buffer, required: true },
  contentType: { type: String, required: true },
});

module.exports = mongoose.model('Photo', photoSchema);
