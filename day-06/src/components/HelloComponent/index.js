import { useState } from "react";

const HelloComponent = () => {
  const [value, setValue] = useState(0);

  // return table => table => tr component => td componenet
  // form dang ky => form/table => div/tr componenet => input component

  // Events - Sự kiện :
  // onClick, onScroll, onChange, onDoubleClick, => Tự định nghĩa ra
  // onChange => Khi 1 thẻ html, thay đổi về thuộc tính, hoặc là value của trường input thay đổi
  // nó sẽ gọi
  // Khi mà các nhập vào thẻ input => hàm onChange nó sẽ gọi bấy nhiêu lần các bạn nhập

  return <p>Hello {value}</p>;
};

export default HelloComponent;
