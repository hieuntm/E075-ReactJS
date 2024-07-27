import { useState } from "react";

// props
const HelloComponent = ({ name, list, object, age }) => {
  // state
  const [value, setValue] = useState(0);

  return <p>Hello {value}</p>;
};

export default HelloComponent;
