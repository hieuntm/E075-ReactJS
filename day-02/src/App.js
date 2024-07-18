import './App.css';
import Header from './components/Header/index' // Nhúng 1 components mới vào 
import Body from './components/Body/index'
import Footer from './components/Props/index';
// Component root
import Table from './components/Table';
// props => properties
function App() {
  return (
    <div>
      {/* <Header />
      <Header />

      <Header />
      <Header />
      <Header />

      <h1>Day la App Components</h1>
      <Body/>
      <input value="123" id="123"/>
      <Footer name={"abc"} phoneNumber={"098123123"} />  */}
    
     <Table type={7}/>
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
