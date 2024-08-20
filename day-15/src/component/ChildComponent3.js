import { useContext, useEffect } from "react";
import { AuthenContext } from "../context/authen-context";

import { useLocation } from "react-router-dom";


export default function ChildComponent3() {

  const location = useLocation();
  console.log(location);

  return <div>Child 3: useNavigation, useLocation</div>;
}
