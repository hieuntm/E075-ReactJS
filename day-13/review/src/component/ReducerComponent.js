import { useReducer, useState } from "react";

const initValue = {
  name: "GA",
  age: 20,
};

const callbackFunction = (currentState, payload) => {
  // payload là data, được truyền ghi sử dụng hàm dispatch
  // mục đích chứa thông tin

  // currentState = trạng thái hiện tại của state

  // Khi payload của các bạn, có trường action/đặt tên là gì cũng được
  if (payload.action === "CLICK") {
    // click để đổi state
  }
  if (payload.action === "SCROLL") {
    // click để đổi state
  }
  if (payload.action === "DOUBLECLICK") {
    // click để đổi state
  }
  // luôn luôn trả về state
  return currentState;
};

const ReducerComponent = () => {
  const [data, dispatchData] = useReducer(callbackFunction, initValue);
  const [data2, setData2] = useState(initValue);

  const clickHandler = () => {
    dispatchData({ action: "CLICK", data: "1", id: "1" });
    // Truyền data vào đây

    if ("CLICK" === "CLICK") {
      setData2;
    }
    if ("SCROLL" === "SCROLL") {
      setData2;
    }
  };

  return (
    <>
      <button onClick={clickHandler}>Clickme</button>
    </>
  );
};
