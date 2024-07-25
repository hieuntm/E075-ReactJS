import HeaderLayout from "./HeaderLayout";
import ChaComponent from "./Props/ChaComponent";
import "bootstrap/dist/css/bootstrap.css"

// props => properties
function App() {
  return (
    <div>
       <HeaderLayout></HeaderLayout>
       {/* <ChaComponent></ChaComponent> */}
    </div>
  )
}

// tạo ra 1 component
// cho phép truyền vào props tên là type
// Nếu type = 1, thì hiển thị ra table có size 3x3
// Nếu type = 2, thì hiện thị ra table có size 5x5
// Nếu type = 3, thì hiện thị ra table có size 7x7
// Data trong table thì có thể ngẫu nhiên
// Lấy props, if else props, và return trong từng if else
export default App;
