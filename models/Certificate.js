const mongoose = require("mongoose");

const certificateSchema = new mongoose.Schema({
studentName: { type: String, required: true },
  marks: [{ subject: String, mark: Number }],
  certificateImage: Buffer,
});

module.exports = mongoose.model("Certificate", certificateSchema);
 