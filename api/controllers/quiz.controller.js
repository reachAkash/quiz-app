const Quiz = require("../models/quiz.model");
const User = require("../models/user.model");
const { errorHandler } = require("../utils/error");

async function uploadQuestion(req, res, next) {
  try {
    const { images, question, answer, options } = req.body;
    if (
      !Array.isArray(images) &&
      !Array.isArray(options) &&
      !Array.isArray(answer)
    ) {
      return next(errorHandler(401, "Please Provide Images, Options & Answer"));
    } else if (
      !(
        images.length > 0 &&
        options.length > 3 &&
        question &&
        answer.length > 1
      )
    ) {
      return next(
        errorHandler(
          401,
          "Images, Question, Answer & Points is a required field!"
        )
      );
    }
    const newQuiz = new Quiz({
      images,
      question,
      answer,
      options,
    });
    await newQuiz.save();
    console.log(newQuiz);
    return res.status(201).json({
      message: "Quiz Created!",
      // data : newQuiz._doc
    });
  } catch (err) {
    return next(err);
  }
}

async function ValidateAnswer(req, res, next) {
  const { quizId, answer } = req.body;
  try {
    const quizObj = await Quiz.findOne({ _id: quizId });
    if (!quizObj) {
      return next(errorHandler(401, "Quiz not found!"));
    }
    let newPoints;
    console.log(quizObj);
    const isCorrect = quizObj.answer[0] === answer;

    return res.status(200).json({
      message: isCorrect ? "Correct Answer 🥳" : "Aw, it's okay 😉",
    });
  } catch (err) {
    next(err);
  }
}

async function getQuestions(req, res, next) {
  try {
    const data = await Quiz.find({});
    return res.status(200).json({
      message: "data fetched successfully!",
      data,
    });
  } catch (err) {
    next(err);
  }
}

module.exports = { uploadQuestion, getQuestions, ValidateAnswer };
