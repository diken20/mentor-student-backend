const express = require("express");
const app = express();

app.use(express.json());

app.use("/api/auth", require("./routes/auth.routes"));
app.use("/api/students", require("./routes/student.routes"));
app.use("/api/assignments", require("./routes/assignment.routes"));
app.use("/api/submissions", require("./routes/submission.routes"));




app.get("/", (req, res) => {
  res.send("API Running");
});

module.exports = app;
