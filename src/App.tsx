import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Home />} />
        <Route path="/signin" element={<Home />} />
        <Route path="/review" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
