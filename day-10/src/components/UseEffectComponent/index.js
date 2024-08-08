import { useState, useEffect } from "react";

const AComponent = () => {
  const [data, setData] = useState([]);
  const [date, setDate] = useState("20/10/2022");
  const [count, setCount] = useState(1);

  useEffect(() => {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);

    return () => {
      console.log("Clean up: " + count);
    };
  }, [count]);

  useEffect(() => {
    fetch("https://swapi.dev/api/people")
      .then((response) => response.json())
      .then((data) => setData(data.results)); //=> Promise: Fulfilled, pending, reject
  }, [date]);
  // Spam => truyền []

  const handleClick = () => {
    setDate("HELLO ABC ");
  };

  const handleClickCount = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>
        <p>Count: {count}</p>
        <button onClick={handleClickCount}>Click</button>
      </div>
      <div>
        <p>{date}</p>
        <button onClick={handleClick}>Click</button>
      </div>
      {data.map((item) => (
        <>
          <h2>Title</h2>
          <h4>Body</h4>
        </>
      ))}
    </div>
  );
};

export default AComponent;
