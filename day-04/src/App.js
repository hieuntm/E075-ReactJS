import MyInforComponent from "./Props/MyInforComponent";
import HeaderLayout from "./components/HeaderLayout/index";
import "bootstrap/dist/css/bootstrap.css";
import BodyLayout from "./components/BodyLayout";
import AddItem from "./components/BodyLayout/AddItem";
import { useState } from "react";

/* Cha    
    /* State, props
    /* Component list san pham */
/* Component add san pham */
/* Component update san pham */
/* Component delete san pham */
/* Component export san pham */
/* Component import san pham */

function App() {
  const [products, setProducts] = useState([
    { name: "Pen", price: 20, brand: "ThienLong" },
    { name: "Book", price: 40, brand: "HaiTien" },
    { name: "Ruler", price: 15, brand: "ThienLong" },
    { name: "Ruler2", price: 18, brand: "HaiTien" },
  ]);

  const [isAdd, setIsAdd] = useState(false);
  const [contentForm, setContentForm] = useState("Show form add");
  const showAddForm = () => {
    setIsAdd((prevState) => !prevState);
    if (!isAdd) {
      setContentForm("Close form");
    } else {
      setContentForm("Show form add");
    }
  };

  const addProduct = (product) => {
    setProducts((prevState) => {
      return [...prevState, product];
    });
  };

  return (
    <div>
      <HeaderLayout />
      <br />
      <BodyLayout items={products} />
      <br />
      {isAdd && <AddItem addProduct={addProduct} />}
      <br />
      <button onClick={showAddForm}>{contentForm}</button>
      {/* <MyInforComponent type="name" initValue="GA" /> */}
      {/* <MyInforComponent type="age" initValue="5" /> */}
      {/* <MyInforComponent type="address" initValue="Nguyen Trai" /> */}
    </div>
  );
}

export default App;
