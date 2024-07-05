const express = require("express");
const { uploadQuestion } = require("../controllers/quiz.controller");
const router = express.Router();

router.post("/quiz-upload", uploadQuestion);
router.get("/getquiz", (req, res, next) => {
  return res.json("hello");
});

module.exports = router;
