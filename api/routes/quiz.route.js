const express = require("express");
const {
  uploadQuestion,
  getQuestions,
  ValidateAnswer,
} = require("../controllers/quiz.controller");
const router = express.Router();

router.post("/quiz-upload", uploadQuestion);
router.get("/getquiz", getQuestions);
router.post("/validate-answer", ValidateAnswer);

module.exports = router;
