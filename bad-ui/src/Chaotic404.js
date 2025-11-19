import React from "react";
import { useNavigate } from "react-router-dom";

const Chaotic404 = () => {
  const navigate = useNavigate();

  return (
    <div style={{ marginTop: "60px", padding: "20px", border: "2px dashed black" }}>
      <h2>404 — Your Mistake, Not Ours</h2>
      <h1>Please rethink your decisions in life.</h1>

      <button onClick={() => navigate("/")}>
        Regret & Go Back
      </button>
    </div>
  );
};

export default Chaotic404;
