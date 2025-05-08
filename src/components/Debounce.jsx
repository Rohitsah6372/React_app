import React, { useEffect, useState } from "react";
import useDebounce from "../hooks/useDebounce";

const Debounce = () => {
  const [value, setValue] = useState("");

  const debouncedValue = useDebounce(value);

  useEffect(() => {
    console.log(debouncedValue);
  }, [debouncedValue]);

  const handleChange = (event) => {
    const text = event.target.value;
    setValue(text);
    // console.log(valu e);
  };

  return (
    <div>
      <input value={value} onChange={handleChange} />
    </div>
  );
};

export default Debounce;
