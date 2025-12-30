const mongoose = require("mongoose");

const assignmentSchema = new mongoose.Schema({
  title: String,
  description: String,
  mentor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Mentor"
  }
});

module.exports = mongoose.model("Assignment", assignmentSchema);
