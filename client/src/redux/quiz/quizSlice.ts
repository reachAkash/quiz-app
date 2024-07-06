import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizData: [],
  points: 0,
};

const quizSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setQuizData: (state, action) => {
      state.quizData = action.payload;
    },
    setPoints: (state, action) => {
      state.points = action.payload;
    },
    restartQuiz: (state) => {
      state.points = 0;
    },
  },
});

export const { setQuizData, setPoints, restartQuiz } = quizSlice.actions;

export default quizSlice.reducer;
