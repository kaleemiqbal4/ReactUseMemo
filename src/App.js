import { useState, useMemo } from "react";

function App() {
  const [data, setData] = useState([1, 2, 3]);
  const [count, setCount] = useState(0);

  const processedData = useMemo(() => {
    return data.map((item) => item * 2);
  }, [data]);

  const updateData = () => {
    setData((prevData) => [...prevData, prevData.length + 1]);
  };

  const incrementCount = () => {
    setCount(count + 1); // Only count changes, not data
  };

  return (
    <>
      <h1>Dependency will be change so Data will be change</h1>
      <button onClick={updateData}>Add Data</button>
      <ul>
        {processedData.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h1>Dependency will not be change so Data will not be change</h1>
      <div>
        <button onClick={incrementCount}>Increment Count</button>
        <p>Count: {count}</p>
        <ul>
          {processedData.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
