import { useState } from "react";

const CartItemComponent = ({ item, handleDelete, handleClick }) => {
  const [amount, setAmount] = useState(0);

  const plusToCart = () => {
    handleClick(item, amount);
  };

  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const increaseAmount = () => {
    setAmount((prev) => prev + 1);
  };

  const decreaseAmount = () => {
    if (amount === 0) {
      setAmount(0);
      return;
    }
    setAmount((prev) => prev - 1);
  };

  return (
    <li className="border-solid border-2 border-indigo-600 ">
      Item in cart: {item.name} - Quantity: {item.quantity} - Price:
      {item.price}
      <div>
        <button
          className="bg-gray-700 opacity-100"
          onClick={() => handleDelete(item.id)}
        >
          Xóa khỏi giỏ hàng
        </button>
      </div>
      <div>
        <button className="w-4 h-6 bg-orange-300" onClick={increaseAmount}>
          +
        </button>
        <input
          type="number"
          className="bg-slate-200"
          value={amount}
          onChange={amountChangeHandler}
        />
        <button className="w-4 h-6 bg-orange-300" onClick={decreaseAmount}>
          -
        </button>
        <button onClick={plusToCart}>Add(Plus) to cart</button>
      </div>
    </li>
  );
};

export default CartItemComponent;
