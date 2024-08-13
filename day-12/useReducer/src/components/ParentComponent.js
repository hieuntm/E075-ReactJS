import { useReducer, useState } from "react";

// Mặc định phải có 2 param
// Param 1: State => Trả về state hiện tại
// Param 2: Chứa data, và data nó dựa vào function dispatch
const dataAction = (state, payload) => {
  // hạn chế
  // Không nên sử dụng state truyền từ param vào để loops hoặc để thay đổi dữ liệu
  console.log("Dispatch Action", state, payload);
  // Action: Chứa thông tin cần để thực hiện

  // Xử lý logic
  if (payload.action === "Checked") {
    const currentState = state;
    const newState = currentState.map((item) => {
      if (item.id === payload.id) {
        item.checked = !item.checked;
      }
      return item;
    });
    return newState;
  }

  if (payload.action === "Deleted") {
    const currentState = state;
    const newState = currentState.map((item) => {
      if (item.id === payload.id) {
        item.checked = !item.checked;
      }
    });
    return newState;
  }

  if (payload.action === "Removed") {
    const currentState = state;
    const newState = currentState.map((item) => {
      if (item.id === payload.id) {
        item.checked = !item.checked;
      }
    });
    return newState;
  }

  // Kết thúc, cần phải trả về state mới
  return state;
};

const initValue = [
  { id: 1, name: "Hoc react", checked: false },
  { id: 2, name: "Hoc java", checked: false },
  { id: 3, name: "Hoc Database", checked: false },
];

const ParentComponent = () => {
  const [data, dispatchState] = useReducer(dataAction, initValue);
  const [data2, setState] = useState({
    id: 1,
    name: "Hoc react",
    checked: false,
    age: 20,
    address: "HN",
  });

  // Note: State => Dùng tương đương như là reducer
  // bản chất reducer là để xử lý các state phức tạp

  const handleClick = (id) => {
    dispatchState({ action: "Checked", id: id });
  };

  return (
    <>
      {data.map((item) => {
        return (
          <div>
            <h2>Title: {item.name} </h2>
            <input
              type="checkbox"
              checked={item.checked}
              onClick={() => handleClick(item.id)}
            />
            <p>Click me</p>
          </div>
        );
      })}
    </>
  );
};

export default ParentComponent;
