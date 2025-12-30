const router = require("express").Router();
const {
  createSubmission,
  getSubmissions
} = require("../controllers/submission.controller");

router.post("/", createSubmission);
router.get("/", getSubmissions);

module.exports = router;
