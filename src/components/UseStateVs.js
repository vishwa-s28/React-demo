import React, { useState } from "react";

function UseStateVs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const handleReset = () => {
    setName("");
    setEmail("");
  };
  return (
    <>
      <form>
        <label>
          Name:
          <input
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <br />
        <button type="button" onClick={handleReset}>
          Reset
        </button>
        <p>
          Name: {name}, Email: {email}
        </p>
      </form>
    </>
  );
}

export default UseStateVs;
