import React, { useEffect, useRef, useState } from "react";

const DemoUseRef = () => {
  const [input, setInput] = useState("");
  const prevInput = useRef("");
  const inputElement = useRef();

  useEffect(() => {
    prevInput.current = input;
  }, [input]);

  const focusInputElement = () => {
    inputElement.current.focus();
  };
  return (
    <>
      <label>Name :</label>
      <input type="text" ref={inputElement} value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={focusInputElement}>focus</button>
      <br />
      <label>Current Value : </label>{input}
      <br />
      <label>Previous Value : </label>{prevInput.current}
    </>
  );
};

export default DemoUseRef;
