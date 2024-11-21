import React, { createContext, useState } from "react";
import DemoUseState from "../components/DemoUseState";

export const UserContext = createContext();

const Demo = () => {
  const [user] = useState("Vishwa");
  const [demoUseState, setDemoUseState] = useState(false);
  const handleShowDemoUseState = () => {
    setDemoUseState(true);
  }

  return (
    <UserContext.Provider value={user}>
      <h3>Hello {user}</h3>
      <p>click button to see demo of useState, useEffect and useContext hooks!</p>
      <button onClick={handleShowDemoUseState}>UseState Example</button>
      {demoUseState && <DemoUseState />}
    </UserContext.Provider>
  );
};

export default Demo;
