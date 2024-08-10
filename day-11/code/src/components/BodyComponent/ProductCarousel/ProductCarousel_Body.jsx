import { ProductCarousel_Card } from "./ProductCarousel_Card";
import "./ProductCarousel_Body.css";
import { useEffect, useState } from "react";

export function ProductCarousel_Body() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/pc")
      .then((response) => response.json())
      .then((data) => {
        setTimeout(() => {
          setData(data);
        }, 1000);
      });
  }, []);

  return (
    <div className="product-carousel-card-container">
      {data.map((product) => (
        <ProductCarousel_Card product={product} key={product.name} />
      ))}
    </div>
  );
}
