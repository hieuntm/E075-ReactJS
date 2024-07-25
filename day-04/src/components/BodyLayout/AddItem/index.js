import { useState } from "react";

const AddItem = ({ addProduct }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");

  const nameChange = (event) => {
    setName(event.target.value);
  };

  const priceChange = (event) => {
    setPrice(event.target.value);
  };

  const brandChange = (event) => {
    setBrand(event.target.value);
  };

  const addItem = () => {
    const newItem = {
      name: name,
      price: price,
      brand: brand,
    };
    addProduct(newItem);
    setName("");
  };

  return (
    <form>
      <div>
        <label>Name</label>
        <input onChange={nameChange} value={name} />
      </div>
      <div>
        <label>Price</label>
        <input onChange={priceChange} />
      </div>
      <div>
        <label>Brand</label>
        <input onChange={brandChange} />
      </div>
      <button onClick={addItem}>Add</button>
    </form>
  );
};

export default AddItem;
