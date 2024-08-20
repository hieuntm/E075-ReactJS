import { useContext, useEffect } from "react";
import { AuthenContext } from "../context/authen-context";

import { useParams } from "react-router-dom";

export default function ChildComponent2() {

  // const ctx = useContext();
  const {id} = useParams() || -1;

    // ctx.products => trả về 1 list sản phẩm
    // filter với id từu params
    // trả về 1 object trùng với id truyền vào
    // Có dữ liệu => Hiển thị nó ra
    // Nếu không có dữ liệu => Notfound


  return <div>Child 2 component voi id: ${id}</div>;
}
