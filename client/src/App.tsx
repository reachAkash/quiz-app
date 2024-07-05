import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import SignIn from "./components/Signin";
import Review from "./components/Review";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/review" element={<Review />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}

export default App;
