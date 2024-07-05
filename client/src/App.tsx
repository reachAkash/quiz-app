import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import SignIn from "./components/Signin";
import Review from "./components/Review";
import { Toaster } from "sonner";
import Notfound from "./components/Notfound";
import QuizPage from "./components/QuizPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/review" element={<Review />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
