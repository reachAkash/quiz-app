import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizData: [],
};

const quizSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setQuizData: (state, action) => {
      state.quizData = action.payload;
    },
  },
});

export const { setQuizData } = quizSlice.actions;

export default quizSlice.reducer;
