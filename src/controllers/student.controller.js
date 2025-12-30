const Student = require("../models/Student");

exports.createStudent = async (req, res) => {
  const student = await Student.create({
    ...req.body,
    mentor: req.user.id
  });
  res.status(201).json(student);
};

exports.getStudents = async (req, res) => {
  const students = await Student.find({ mentor: req.user.id });
  res.json(students);
};
