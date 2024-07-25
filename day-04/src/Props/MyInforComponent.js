import { useState } from "react";

// repeat

const MyInforComponent = ({ type, initValue }) => {
  const [value, setValue] = useState(initValue);
  const [userInputValue, setUserInputValue] = useState(initValue);

  const onHandleChange = (event) => {
    setUserInputValue(event.target.value);
  };

  const changeValue = () => {
    setValue(userInputValue);
  };

  return (
    <div>
      <h2>{value}</h2>
      <div>
        <p>Change value</p>
        <input onChange={onHandleChange} />
        <button onClick={changeValue}>Click me to change value</button>
      </div>
    </div>
  );
};

export default MyInforComponent;
