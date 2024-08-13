import { useEffect, useState } from "react";

import CardComponent from "../../CardComponent";
import Loader from "../../../UI/Loader";
import FormComponent from "../../../UI/Form";

const dataTableContent = [
  {
    title: "Title",
    id: "titleId",
    type: "text",
    placeholder: "Please input title",
  },
  {
    title: "Price",
    id: "PriceId",
    type: "number",
    placeholder: "Please input price",
  },
  {
    title: "PrePrice",
    id: "PrePriceId",
    type: "number",
    placeholder: "Please input pre-price",
  },
  {
    title: "Image",
    id: "ImageId",
    type: "text",
    placeholder: "Please image link",
  },
  {
    title: "Description",
    id: "DescriptionId",
    type: "text",
    placeholder: "Please description",
  },
];

const ListCardComponent = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [openAddForm, setOpenAddForm] = useState(true);

  useEffect(() => {
    setIsLoading(false);

    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(true);
      });

    // setTimeout(() => {
    //   setIsLoading(false);
    //   fetch("http://localhost:4000/products")
    //     .then((response) => response.json())
    //     .then((data) =>
    //       setTimeout(() => {
    //         setProducts(data);
    //         setIsLoading(true);
    //       }, 1000)
    //     )
    //     .catch((error) => {
    //       console.log(error);
    //       setIsLoading(true);
    //     });
    // }, 1000);
  }, []);

  const temp = []; // Display
  let array = [];

  for (let product of products) {
    array.push(product);
    if (array.length == 4) {
      temp.push(array);
      array = [];
    }
  }

  return (
    <>
      {!openAddForm && <FormComponent dataTableContent={dataTableContent} />}
      {!isLoading && <Loader />}
      {temp.map((array, index) => (
        <div
          className={
            index === 0 ? "carousel-item item active" : "carousel-item item"
          }
        >
          <div className="row">
            {array.map((product, index) => (
              <CardComponent key={index} {...product}></CardComponent>
            ))}
          </div>
        </div>
      ))}
      <button>Add Product</button>
    </>
  );
};

export default ListCardComponent;
