import { useReducer, useState } from "react";
import CartItemComponent from "./CartItem/CartItemComponent";
// Constants
const ADD_TO_CART = "ADD_TO_CART";
const DELTE_FROM_CART = "DELTE_FROM_CART";

const totalPriceCalculation = (currentCart) => {
  return currentCart.reduce(
    (prev, currentValue) => prev + currentValue.quantity * currentValue.price,
    0
  );
};

const dispatchFunction = (currentState, payload) => {
  if (payload.action === DELTE_FROM_CART) {
    // Cart hiện tại
    const currentCart = currentState.items;
    // Tạo ra cart từ việc lọc id
    const newCart = currentCart.filter((item) => item.id != payload.id);
    // Tạo ra totalPrice mới
    const totalPrice = totalPriceCalculation(newCart);
    return { items: [...newCart], totalPrice: totalPrice };
  }

  if (payload.action === ADD_TO_CART) {
    // Thêm vào giỏ hàng
    // Thêm field liên quan đến quantity
    // Cập nhật totalPrice
    // Trả về newState
    const currentCart = currentState.items;
    // Xử lý logic, check validation
    // Lặp toàn bộ cart, xem item mua đã tồn tại hay chưa, nếu chưa thì thêm mới
    // nếu rồi cập nhật
    // for(let item of currentCart){
    //     if(payload.product.id === item.id){
    //         // Item found
    //         // Tồn tại sản phẩm này trong cart
    //     }
    // }

    // Tìm duy nhất, sản phẩm trùng id với sản phẩm muốn mua
    const itemFound = currentCart.find(
      (cartItem) => cartItem.id === payload.product.id
    );
    if (itemFound) {
      // Xử lý logic thêm amount
      let numberPlus = 1;

      if (payload.amount) {
        numberPlus = payload.amount;
      }

      // Tồn tại sản phẩm trong giỏ hàng rồi
      // Cộng quantity, tính lại totalPrice

      // item found: id, name, price, brand, quantity: 1
      const newExistingItem = {
        ...itemFound,
        quantity: itemFound.quantity + +numberPlus,
      }; // 1 sản phẩm để cập nhật

      // Lọc cart cũ, để xóa item đã tồn tại ra
      const newCart = currentCart.filter(
        (cartItem) => cartItem.id !== payload.product.id
      ); // Mảng
      newCart.push(newExistingItem);

      // currentValue, từng giá trị trong mảng currentCart => là product
      const newTotalPrice = totalPriceCalculation(newCart);

      console.log(newTotalPrice);

      return { items: [...newCart], totalPrice: newTotalPrice };
    } else {
      // nếu như nó chưa tồn tại
      // Destructring product
      // id, name, price, brand, quantity: 1
      currentCart.push({ ...payload.product, quantity: 1 });
      const newTotalPrice = totalPriceCalculation(currentCart);
      return { items: currentCart, totalPrice: newTotalPrice };
    }
  }

  return currentState;
};

const initValue = {
  items: [],
  totalPrice: 0,
};

const CartComponent = () => {
  const [cart, dispatch] = useReducer(dispatchFunction, initValue);

  const [products, setProducts] = useState([
    { id: 1, name: "Pen", price: 20, brand: "ThienLong" },
    { id: 2, name: "Book", price: 40, brand: "HaiTien" },
    { id: 3, name: "Ruler", price: 15, brand: "ThienLong" },
    { id: 4, name: "Paper", price: 18, brand: "HaiTien" },
  ]);

  const handleClick = (product, amount) => {
    dispatch({ action: ADD_TO_CART, product: product, amount: amount });
    // dispatch({ action: ADD_TO_CARD, product: product, amount: 10 });
  };

  const handleDelete = (id) => {
    dispatch({ action: DELTE_FROM_CART, id: id });
  };

  return (
    <>
      <div>
        number of items on cart: {cart.items.length}, totalPrice:
        {cart.totalPrice}
        <div>
          <ul>
            {cart.items.map((item) => (
              <CartItemComponent
                item={item}
                handleDelete={handleDelete}
                handleClick={handleClick}
              />
            ))}
          </ul>
        </div>
      </div>
      {products.map((item) => {
        return (
          <div>
            <p>
              Title: {item.name} - Price: {item.price}
            </p>
            <button
              className="bg-indigo-500 opacity-100"
              onClick={() => handleClick(item)}
            >
              Click me
            </button>
            <p>Add me</p>
          </div>
        );
      })}
    </>
  );
};

export default CartComponent;
