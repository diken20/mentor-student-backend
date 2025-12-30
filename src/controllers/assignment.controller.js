const Assignment = require("../models/Assignment");

exports.createAssignment = async (req, res) => {
  const assignment = await Assignment.create({
    ...req.body,
    mentor: req.user.id
  });
  res.status(201).json(assignment);
};

exports.getAssignments = async (req, res) => {
  const assignments = await Assignment.find({ mentor: req.user.id });
  res.json(assignments);
};
