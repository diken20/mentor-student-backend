const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const {
  createAssignment,
  getAssignments
} = require("../controllers/assignment.controller");

router.post("/", auth, createAssignment);
router.get("/", auth, getAssignments);

module.exports = router;
