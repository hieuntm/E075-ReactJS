import { createContext, useReducer } from "react";
// AuthContext - Đảm bảo login logout đăng ký
// Có bao nhiêu account đủ yêu cầu để vào hệ thống
// State: Quản lý account
// State quản lý hành vi đăng nhập đăng ký
const defaultValue = {
  cart: null,
  addToCart: (item) => {},
  removeFromCart: (id) => {},
  updateCart: (id, quantity) => {}, // Cập nhật sổ quantity của item trong giỏ
};

export const CartContenxt = createContext(defaultValue);

const defaultCart = {
  items: [],
  totalPrice: 0,
  sale: 0,
};

const cartCallBack = (currentState, payload) => {
  if (payload.action === "ADD_TO_CART") {
  }
  if (payload.action === "REMOVE_FROM_CART") {
  }
  if (payload.action === "UPDATE_CART") {
  }
  return currentState;
};

export default function CartContextProvider({ children }) {
  const [cart, dispatch] = useReducer(cartCallBack, defaultCart);

  const value = {
    cart: cart,
    addToCart: (item) => {
      dispatch({ action: "ADD_TO_CART", item: item });
    },
    removeFromCart: (id) => {
      dispatch({ action: "REMOVE_FROM_CART", id: id });
    },
    updateCart: (id, quantity) => {
      dispatch({ action: "UPDATE_CART", id: id, quantity: quantity });
    }, // Cập nhật sổ quantity của item trong giỏ};
  };

  return (
    <CartContenxt.Provider value={value}>{children}</CartContenxt.Provider>
  );
}
