const express = require("express");
const {
  uploadQuestion,
  getQuestions,
  ValidateAnswer,
} = require("../controllers/quiz.controller");
const router = express.Router();

router.post("/quiz-upload", uploadQuestion);
router.get("/getquiz", getQuestions);
router.get("/validate-answer", ValidateAnswer);

module.exports = router;
