import { useState } from "react";
import ChildComponent from "../ChildComponent";
import ChildComponent2 from "../ChildComponent2";

const ParentComponent = () => {
  const [value, setValue] = useState(10);

  const reSetValue = (newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <>
      <ChildComponent value={value} id="1" reSetValue={reSetValue} />
      <ChildComponent2 value={value} id="2" />
    </>
  );
};

export default ParentComponent;
