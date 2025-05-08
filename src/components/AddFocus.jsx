import React, { useEffect, useRef } from "react";

const AddFocus = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        inputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleClick);

    return () => {
      window.removeEventListener("keydown", handleClick);
    };
  }, []);

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
};

export default AddFocus;
