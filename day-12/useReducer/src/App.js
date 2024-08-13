import { useState } from "react";

const cartDefault = {
  items: [],
  totalPrice: 0,
  shippingPrice: 0,
};

function App() {
  const [products, setProducts] = useState([
    { name: "Pen", price: 20, brand: "ThienLong" },
    { name: "Book", price: 40, brand: "HaiTien" },
    { name: "Ruler", price: 15, brand: "ThienLong" },
    { name: "Ruler2", price: 18, brand: "HaiTien" },
  ]);
  const [cart, setCart] = useState(cartDefault);
  // Trạng thái/hành động nào để sử dụng cart
  // Thêm item vào cart
  // Xóa item khỏi cart
  // Order
  // Tăng giảm số lượng
  // Áp dụng voucher
  //

  const clickHandler = () => {
    // Thêm item vào cart
    setCart((preState) => {
      return { ...preState, items: "name1" };
    });
  };

  const clickHandler2 = (id) => {
    // Xóa item khỏi cart
    setCart((preState) => {
      const itemsCart = preState.items;
      // Sau khi xóa
      const newCart = itemsCart.filter((item) => item.id !== id);

      return { ...preState, items: newCart };
    });
  };

  const clickHandler3 = (id) => {
    // Tăng giảm số lượng
    setCart((preState) => {
      // Lấy state cart cũ
      const itemsCart = preState.items;
      // Lặp toàn bộ cart, tìm ra cái item đang muốn tăng số lượng
      // Tăng số lượng
      // Lưu vào lại state mới

      return { ...preState, items: "" };
    });
  };

  const clickHandler4 = () => {};

  return (
    <div>
      <ul>
        {products.map((item) => {
          return (
            <>
              <li>{item.name}</li>
              <li>
                <button onClick={clickHandler}>Thêm item vào cart</button>
              </li>
              <li>
                <button onClick={clickHandler2}>Tăng giảm số lượng</button>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
