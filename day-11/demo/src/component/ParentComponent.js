import { useState, useCallback, useMemo } from "react";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const [data, setData] = useState({ name: "GA", count: 0 });
  const [value, setValue] = useState(1);

  const memoTest = useMemo(() => {
    countNumber(value);
  }, [value]);

  const handler = useCallback(() => {
    // Xử lý logic
    countNumber(value);
    //
  }, [value]);

  const countHandler = () => {
    // setData(data.name + 1);
    // => { name: "GA", count: 0 } => 1
    setData((prevState) => {
      return { ...prevState, count: prevState.count + 1 };
    });
  };

  return (
    <div>
      <ChildComponent name={data.name} handler={handler} />
      <p>{value}</p>
      <button onClick={countHandler}>Click count</button>
    </div>
  );
};

const countNumber = (number) => {
  for (let i = 1; i < 100000; i++) {
    number += i;
  }
  return number;
};

export default ParentComponent;
