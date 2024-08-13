import { useState, useEffect } from "react";

export default function ProgressBar({ timer }) {
  const [remainingTime, setRemainingTime] = useState(timer);
  const [count, setCount] = useState(1);
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log("Function call " + count);
    const interval = setInterval(() => {
      setRemainingTime((prevTime) => {
        if (prevTime === 0) {
          prevTime = timer;
        }
        return prevTime - 250;
      });
      // console.log("Remaining time  " + remainingTime);
      setCount((prevTime) => prevTime + 1);
    }, 200);

    fetch("http://localhost:4000/" + "posts", {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
      body: {},
    })
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          console.log(data);
          setData(data);
          clearInterval(interval);
        }, 5000);
      });

    // Cleanup fu nction
    return () => {
      console.log("Clean interval " + count); // => Chỉ gọi ra khi, cái useEffect này bị gọi lại
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timer} />;
}
