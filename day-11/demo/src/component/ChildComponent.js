import { memo } from "react";

const ChildComponent = ({ name, handler }) => {
  return <div>{name}</div>;
};

export default memo(ChildComponent);
