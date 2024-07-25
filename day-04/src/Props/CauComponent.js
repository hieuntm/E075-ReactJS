import { useState, Fragment } from "react";

// X - Class Component
// V - Functional Component

const CauComponent = ({ name, age }) => {
  const [middleName, setMiddleName] = useState(name);
  const [count, setCount] = useState(0);

  function clickMe() {
    setMiddleName("Đây là giá trị sau khi đổi");
  }

  function countUp() {
    // setCount((prevState) => {
    //   return prevState + 1;
    // });
    setCount(count + 1);
  }

  return (
    <Fragment>
      {/* <input id="" className="" value={middleName} /> */}
      <p>{middleName}</p>
      <input value={middleName} />
      <p>{count}</p>

      <button onClick={clickMe}>Click</button>
      <button onClick={countUp}> + 1</button>
    </Fragment>
  );
};

export default CauComponent;
