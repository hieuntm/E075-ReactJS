import { useContext, useEffect } from "react";
import { AuthenContext } from "../context/authen-context";

export default function ChildComponent() {
  const authenCtx = useContext(AuthenContext);

  useEffect(() => {
    authenCtx.register(12322, 12322);
  }, []);
  console.log(1, authenCtx);

  return <div></div>;
}
