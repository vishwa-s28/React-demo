import React, { useReducer } from "react";

function formReducer(state, action) {
  switch (action.type) {
    case "updateField":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "reset":
      return action.initialState;
    default:
      throw new Error("Unknown action type");
  }
}

const UseReducerVs = () => {
  const initialState = { name: "", email: "" };

  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "updateField",
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleReset = () => {
    dispatch({ type: "reset", initialState });
  };

  return (
    <form>
      <label>
        Name:
        <input name="name" value={state.name} onChange={handleChange} />
      </label>
      <br />
      <label>
        Email:
        <input name="email" value={state.email} onChange={handleChange} />
      </label>
      <br />
      <button type="button" onClick={handleReset}>
        Reset
      </button>
      <p>
        Name: {state.name}, Email: {state.email}
      </p>
    </form>
  );
};

export default UseReducerVs;
