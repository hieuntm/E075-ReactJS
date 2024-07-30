import "bootstrap/dist/css/bootstrap.css";
import HelloComponent from "./components/HelloComponent/index.js";
import Input from "./components/UI/Input/index.js";
import Button from "./components/UI/Button/index.js";
import Table from "./components/UI/Table/index.js";
import Card from "./components/UI/Card/index.js";

import myImage from "./assets/After.JPG";

function App() {
  return (
    <div>
      <Card
        title="Phong hoc"
        myImage={myImage}
        width="200px"
        height="200px"
        alt="Move vao day khi ko load duoc anh"
      />
      {/* <p>Input name here</p>
      <Input /> => Màu đỏ, dài 200px, có place holder = mike
      <p>Input age here</p>
      <Input /> => Màu xanh da trời, dài 50px, có place holder = 5
      <p>Input address here</p>
      <Input /> => Màu vàng, dài 300px, có place holder = Hanoi, id, name */}

      {/* <Input
        placeholder="Mike"
        id="10"
        name="name"
        title="Nhap ten"
        type="text"
        capitalTitle={true}
      /> */}
      {/* <Table colNum={5} rowNum={5} headersTitle={"123"} dataTables={"123"} /> */}

      {/* <Input
        placeholder="Mike"
        id="10"
        name="name"
        title="Nhap password"
        limitWord={3}
        type="password"
        displayHorizon={true}
      />
      <Input
        placeholder="Mike"
        id="10"
        name="name"
        title="Nhap dia chi"
        type="checkbox"
      />
      <Input
        placeholder="Mike"
        id="10"
        name="name"
        title="Nhap dob"
        displayHorizon={true}
        type="radio"
      />

      <Button id="1" title="Click me" />
      <Button id="1" title="Click me 2" onClick={clickMe1} />
      <Button id="1" title="Click me 3" /> */}
    </div>
  );
}

export default App;
