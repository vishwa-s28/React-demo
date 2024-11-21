import React from "react";
import UseStateVs from "../components/UseStateVs";
import UseReducerVs from "../components/UseReducerVs";

const UseStateVsUseReducer = () => {
  return (
    <>
      <h3>using useState: </h3>
      <UseStateVs />

      <h3>using useReducer: </h3>
      <UseReducerVs />
    </>
  );
};

export default UseStateVsUseReducer;
