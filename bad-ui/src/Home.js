import React, { useEffect } from "react";
import BadForm from "./BadForm";

function Home() {
  // 🎨 Change color randomly every 5s
  useEffect(() => {
    const changeTheme = () => {
      document.body.style.background = `hsl(${Math.random() * 360}, 100%, 70%)`;
    };
    const interval = setInterval(changeTheme, 5000);
    return () => clearInterval(interval);
  }, []);

  // 🐌 Slow down scroll
  useEffect(() => {
    const slowScroll = () => {
      window.scrollBy(0, 0.5);
    };
    window.addEventListener("scroll", slowScroll);
    return () => window.removeEventListener("scroll", slowScroll);
  }, []);

  return (
    <div style={{ padding: "40px" }}>
      <h1> Welcome to the most Friendly Website</h1>
      <p>Everything here is designed friendly enough to irritate you.</p>

      <BadForm />

      <div className="popup">
        <h1>You seem to be Unemployed to have time to spend here</h1>
      </div>
    </div>
  );
}

export default Home;
