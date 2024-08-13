import "bootstrap/dist/css/bootstrap.css";
import { useState, createContext, useContext } from "react";

// B1. Bước tạo context
export const InfoContext = createContext();
// B2. Đóng gói các component muốn sử dụng context chung
// Đóng gói thông qua 1 thằng gọi là Provider.

// * createContext: Tạo context ở component cha
// useContext: Sử dụng context ở component con
// B3. Sử dụng useContext để lấy dữ liệu từ context ra

// Muốn truyền data từ App -> App4
function App() {
  const [info, setInfo] = useState("GA");
  return (
    <InfoContext.Provider value={info}>
      <App2 />
    </InfoContext.Provider>
  );
}

// -------------------------
function App2() {
  return <App3 />;
}

function App3() {
  return <App4 />;
}
// -------------------------
// Có nhận props, nhưng ko dùng

function App4() {
  const context = useContext(InfoContext);

  return <div>Hello {context}</div>;
}

export default App;
