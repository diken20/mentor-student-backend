const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const controller = require("../controllers/student.controller");

router.post("/", auth, controller.createStudent);
router.get("/", auth, controller.getStudents);

module.exports = router;
