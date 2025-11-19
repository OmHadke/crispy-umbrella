import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BadForm = () => {
  const navigate = useNavigate();
  const [text, setText] = useState("");

  const handleSubmit = () => {
    alert("WRONG INPUT. Try again.");
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <h3>Signup (good luck)</h3>

      <input
        type="text"
        placeholder="Enter full name but in Marathi"
        style={{ padding: "10px", width: "300px" }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <p>Captcha: Select all images where someone is questioning life.</p>
      <img src="https://www.themindfulword.org/wp-content/uploads/2012/07/man-sitting.jpg" alt="confused" width="80" />
      <img src="https://static.vecteezy.com/system/resources/thumbnails/032/965/835/original/confused-man-questioning-life-by-looking-in-mirror-video.jpg" alt="confused" width="80" />
      <img src="https://media.istockphoto.com/id/1550540247/photo/decision-thinking-and-asian-man-in-studio-with-glasses-questions-and-brainstorming-on-grey.jpg?s=612x612&w=0&k=20&c=u0axNDq0EuPp8cEjR5mmVOaAt4FvRCTnbD4SQt66WTw=" alt="confused" width="80" />

      <br />

      {/* GREEN BUTTON  ➜ NAVIGATE TO CHAOS404 PAGE */}
      <button
        style={{ background: "green" }}
        onClick={() => navigate("/chaos")}
      >Try Clicking Here!</button>

      {/* RED BUTTON – NO ACTION */}
      <button
    style={{
    background: "red",
    position: "absolute", // ⬅ IMPORTANT
    padding: "20px",
  }}
  onMouseEnter={(e) => {
    const btn = e.target;
    const randomX = Math.random() * window.innerWidth * 0.8;
    const randomY = Math.random() * window.innerHeight * 0.8;

    btn.style.left = randomX + "px";
    btn.style.top = randomY + "px";
  }}
>
  Can't Click Me!
</button>


      <br />
      <button onClick={handleSubmit}>Submit (Does Nothing)</button>
    </div>
  );
};

export default BadForm;
