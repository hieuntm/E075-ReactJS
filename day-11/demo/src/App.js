import "bootstrap/dist/css/bootstrap.css";
import { useState, useRef } from "react";
import ParentComponent from "./component/ParentComponent";
// useState(); => Error

function App() {
  const [message, setMessage] = useState();
  const [count, setCount] = useState(0);
  const input = useRef();
  // document.getElementById();

  const onClickHandler = () => {
    console.log(input.current);
    setCount(input.current.value);
  };

  const onChangeHandler = (event) => {
    setCount(event.target.value);
  };

  const onFocusHandler = () => {
    // Kiểm tra
    // Giả sử
    const value = input.current.value;
    if (value.length === 0) {
      input.current.focus();
      setMessage("Dữ liệu không đủ độ dài");
    }
  };

  // useState(); => chi dung o trong nay
  // input, dialog => useRef
  return (
    <div>
      {message !== null && message}
      <p>{count}</p>
      <input ref={input} />
      <button onClick={onClickHandler}>
        Bấm vào đây để tăng giá trị count
      </button>
      <button onClick={onFocusHandler}>Focus text</button>
      <ParentComponent />
    </div>
  );
}

export default App;
