import { useState, useEffect } from "react";
import ListCardComponent from "./ListCardComponent/index";
import ListNavComponent from "./listNavComponent/index";
import FormComponent from "./../../UI/Form";

import { getProducts, getProductById } from "../../../service/products-service";
import useFetch from "../../../hook/useFetch";
import { useCallback } from "react";
import { useMemo } from "react";

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
const ListCard = () => {
  const [products, setProducts] = useState([]);
  const [openAddForm, setOpenAddForm] = useState(true);

  const memoProducts = useMemo(() => getProducts, [products]);

  const gProducts = useCallback(() => memoProducts, []);
  const gProductById = useCallback(() => getProductById(1), []);

  const { isLoading, data, message, error } = useFetch(gProducts, []);

  const object = useFetch(gProductById, {});

  console.log(isLoading, data, message, error);
  console.log(object);

  return (
    <>
      {!openAddForm && <FormComponent dataTableContent={dataTableContent} />}
      <div className="container-xl pt-5">
        <div className="row header">
          <div className="col-6 text-left align-items-center">
            <h3 className="mb-0">Sản phẩm bán chạy</h3>
          </div>
          <div className="col-6 text-right align-items-center justify-content-end">
            <ul className="nav nav-pills mb-0" id="pills-tab" role="tablist">
              <ListNavComponent></ListNavComponent>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-6"></div>
          <div className="col-6">
            <button>Add Products</button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
              data-interval="0"
            >
              <ol className="carousel-indicators">
                <li
                  data-target="#myCarousel"
                  data-slide-to="0"
                  className="active"
                ></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <ListCardComponent
                  products={products}
                  isLoading={true}
                ></ListCardComponent>
              </div>
              <a
                className="carousel-control-prev"
                href="#myCarousel"
                data-slide="prev"
              >
                <i className="fa fa-angle-left"></i>
              </a>
              <a
                className="carousel-control-next"
                href="#myCarousel"
                data-slide="next"
              >
                <i className="fa fa-angle-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListCard;
