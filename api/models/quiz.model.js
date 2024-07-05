const mongoose = require("mongoose");

const QuizSchema = new mongoose.Schema(
  {
    images: {
      type: Array,
      default: [],
    },
    question: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    answer: {
      type: Array,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Quiz = mongoose.model("quiz", QuizSchema);

module.exports = Quiz;
