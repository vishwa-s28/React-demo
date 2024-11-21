import React, { useContext } from "react";
import { UserContext } from "../pages/Demo";

const DemoUseContext = () => {
  const user = useContext(UserContext);
  return (
    <>
      <h3>Hello {user} again!</h3>
    </>
  );
};

export default DemoUseContext;
