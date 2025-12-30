const Submission = require("../models/Submission");

exports.createSubmission = async (req, res) => {
  try {
    const submission = await Submission.create(req.body);
    res.status(201).json(submission);
  } catch (err) {
    res.status(500).json({ message: "Submission failed" });
  }
};

exports.getSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find()
      .populate("assignment")
      .populate("student");
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ message: "Error fetching submissions" });
  }
};
