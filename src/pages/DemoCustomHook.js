import React from "react";
import useWindowSize from "../components/useWindowSize";
import useFetch from "../components/useFetch";

const DemoCustomHook = () => {
  const { width, height } = useWindowSize();
  const { data, error } = useFetch(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return (
    <div>
      <h1>Window Size</h1>
      <p>Width: {width}px</p>
      <p>Height: {height}px</p>

      <h3>using fetch:</h3>
      {data &&
        data.map((item) => {
          return (
            <p style={{ color: "blue" }} key={item.id}>
              {item.title}
            </p>
          );
        })}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}
    </div>
  );
};

export default DemoCustomHook;
