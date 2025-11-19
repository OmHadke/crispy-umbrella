import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Chaotic404 from "./Chaotic404";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chaos" element={<Chaotic404 />} /> {/* NEW PAGE */}
    </Routes>
  );
}

export default App;
