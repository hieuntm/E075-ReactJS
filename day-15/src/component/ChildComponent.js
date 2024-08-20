import { useContext, useEffect } from "react";
import { AuthenContext } from "../context/authen-context";
import { useNavigate } from 'react-router-dom'

export default function ChildComponent() {
  const navigate = useNavigate();

  const clickToNews = () => {
    navigate("/news", {state: {name: "helloX", age: 20}})
  }

  return <div>Child 1 component
    <button onClick={clickToNews}>To News Page</button>
  </div>;
}
