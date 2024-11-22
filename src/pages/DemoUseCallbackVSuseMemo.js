import React, { useState, useCallback, useMemo } from "react";

function DemoUseCallbackVSuseMemo() {
  const [items] = useState(["React", "Angular", "Vue", "Svelte", "Ember"]);
  const [filter, setFilter] = useState("");

  // useCallback: Memoize a function to filter items
  const filterItems = useCallback(
    () =>
      items.filter((item) => item.toLowerCase().includes(filter.toLowerCase())),
    [items, filter]
  );
  // useMemo: Memoize the filtered list
  const filteredItems = useMemo(() => filterItems(), [filterItems]);

  return (
    <div>
      <h1>Frameworks</h1>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Filter frameworks"
      />
      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default DemoUseCallbackVSuseMemo;
