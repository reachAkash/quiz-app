const Quiz = require("../models/quiz.model");
const { errorHandler } = require("../utils/error");

async function uploadQuestion(req, res, next) {
  try {
    const { images, question, answer, points, options } = req.body;
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
        answer.length > 1 &&
        points
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
      points,
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

module.exports = { uploadQuestion };
