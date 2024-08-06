import { ProductCarousel_Header } from "./ProductCarousel_Header";
import { ProductCarousel_Body } from "./ProductCarousel_Body";
import "./ProductCarousel.css";

function ProductCarousel({ data }) {
  return (
    <div className="product-carousel">
      <ProductCarousel_Header />
      <ProductCarousel_Body data={data} />
    </div>
  );
}

export default ProductCarousel;
