import "bootstrap/dist/css/bootstrap.css";
import {
  useEffect,
  useState,
  useRef,
  useMemo,
  useCallback,
  useContext,
  createContext,
} from "react";

export const UserInfoContext = createContext();

export default function App() {
  const [data, setData] = useState();
  const [input, setInput] = useState();

  const result = useMemo(() => calculate(), [data]); // Lưu kết quả của function

  const functionStructure = useCallback(() => calculate(), [data]); // Lưu cấu trúc của function
  // Trường hợp dùng callback => Anh em truyền function từ thằng cha xuống cho thằng con
  // Nếu function thay đổi, thì component rerender
  // Lưu nó lại bằng useCallback => tránh việc rerender nhiều lần

  const inputRef = useRef();

  // useState => input
  // useRef => inputRef.current.value

  // useEffect(callback, depen)

  useEffect(() => {
    // Luôn luôn chạy
    // fetch()
    //   .then((response) => response.json())
    //   .then((data) => setData(data)); // re-render

    return () => {
      // clean up
    };
  }, []); // Mảng chưa các phụ thuộc
  // Mỗi khi phụ thuộc thay đổi thì useEffect nó gọi lại
  // Bỏ hết phụ thuộc đi => useEffect, chạy duy nhất 1 lần

  // useRef => modal, a, video, img
  return (
    <UserInfoContext.Provider value={112}>
      <div>
        <input
          ref={inputRef}
          onChange={(e) => {
            console.log("useRef", inputRef.current.value, inputRef.current);
          }}
        />
        <input
          value={input}
          onChange={(e) => {
            console.log("useState", e.target.value, e.target);
            setInput(e.target.value);
          }}
        />
      </div>
      <ChildComponent />
    </UserInfoContext.Provider>
  );
}

function ChildComponent() {
  const userInfoContext = useContext(UserInfoContext);

  return <div></div>;
}

const calculate = () => {
  let result = 0;
  for (let i = 1; i < 10000; i++) {
    result += i;
  }
  return result;
};
