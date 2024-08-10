// const rooms = [{ hoboi: true, khunghiduong: true, khacsan: false }];

// if(roomsSelect.hoboi === inputDieukien)

// if(roomsSelect.khunghiduong === inputDieukien.khunghiduong)

// if(roomsSelect.khacsan === inputDieukien.khacsan)

// const getProducts = () => {
//   let data;
//   fetch("http://localhost:4000/products", {
//     method: "GET",
//   })
//     .then((response) => response.json())
//     .then((data) => (data = data))
//     .catch((error) => {
//       console.log(error);
//     });

//   return data;
// };

export async function getProducts() {
  // Không dùng hook ở đây
  const response = await fetch("http://localhost:4000/products", {
    method: "GET",
  });
  const data = await response.json();
  return data;
}

export async function getProductById(id) {
  const response = await fetch("http://localhost:4000/products/" + id, {
    method: "GET",
  });
  console.log("service: ", id);
  const data = await response.json();
  return data;
}

//   addProduct(product.myImage, product.title, product.price, product.prePrice)
//   export default async function addProduct(myImage, title, price, prePrice)

//   addProduct(product)
export async function addProduct({ myImage, title, price, prePrice }) {
  const response = await fetch("http://localhost:4000/products", {
    method: "POST",
    body: {
      myImage: myImage,
      title: title,
      price: price,
      prePrice: prePrice,
    },
  });
  const data = await response.json();
  return data;
}

export async function updateProduct(id, { myImage, title, price, prePrice }) {
  const response = await fetch("http://localhost:4000/products/" + id, {
    method: "PUT",
    body: {
      myImage: myImage,
      title: title,
      price: price,
      prePrice: prePrice,
    },
  });
  const data = await response.json();
  return data;
}

export async function deleteProduct(id) {
  const response = await fetch("http://localhost:4000/products/" + id, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
}

// export default { getProducts: getProducts(), getProductById: getProductById() };
