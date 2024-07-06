import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import SignIn from "./components/Signin";
import { Toaster } from "sonner";
import Notfound from "./components/Notfound";
import QuizPage from "./components/QuizPage";
import ReviewPage from "./components/ReviewPage";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/review" element={<ReviewPage />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Toaster className="hidden tablet:flex" />
      <Toaster className="flex tablet:hidden" position="top-right" />
    </BrowserRouter>
  );
}

export default App;
