import { isEmpty } from "rambdax";
import React, { useRef, useState } from "react";

const LongPress = () => {
  const btnRef = useRef(null);

  const [text, setText] = useState("");

  const handleMouseDown = () => {
    btnRef.current = setTimeout(() => {
      setText("Long Pressed");
    }, 500);
  };

  const handleMouseUp = () => {
    clearTimeout(btnRef.current);
  };

  return (
    <div>
      <button
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        className="btn bg-green-100"
        id="btn"
      >
        {isEmpty(text) ? "Enter" : <p>{text}</p>}
      </button>
    </div>
  );
};

export default LongPress;
