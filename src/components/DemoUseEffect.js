import React, { useEffect, useState } from "react";
import DemoUseContext from "./DemoUseContext";

const DemoUseEffect = () => {
  // const [count, setCount] = useState(0);
  // const [add, setAdd] = useState(0);
  // const [multiply, setMultiply] = useState(0);
  const [demoUseContext, setDemoUseContext] = useState(false);
  const [people, setPeople] = useState([]);
  const [error, setError] = useState(null);

  const handleDemoUseContext = () => {
    setDemoUseContext(true);
  };

  // useEffect(() => {
  //   setMultiply(() => count * 2);
  //   setAdd(() => count + 2);
  // }, [count]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/sample.JSON");
        const data = await response.json();
        setPeople(data.people);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);
  if (error) {
    return <p style={{ color: "red" }}>Error: {error}</p>;
  }
  return (
    <>
      {/* <h3>example 1</h3>
      <p>count : {count}</p>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        +1{" "}
      </button>
      <button type="button" onClick={() => setCount((c) => c - 1)}>
        -1{" "}
      </button>
      <p>Add with 2 ={add}</p>
      <p>Multiply by 2 = {multiply}</p> */}

      <h3>People Information</h3>
      <table border={1} style={{ width: "100%", textAlign: "center" }}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {people.length > 0 ? (
            people.map((person, index) => (
              <tr key={index}>
                <td>{person.firstName}</td>
                <td>{person.lastName}</td>
                <td>{person.gender}</td>
                <td>{person.age}</td>
                <td>{person.number}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No data available</td>
            </tr>
          )}
        </tbody>
      </table>

      <button onClick={handleDemoUseContext}>UseContext Example</button>
      {demoUseContext && <DemoUseContext />}
    </>
  );
};

export default DemoUseEffect;
