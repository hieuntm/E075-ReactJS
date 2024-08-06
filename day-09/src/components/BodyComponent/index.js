import "../../App.css";
import "bootstrap/dist/css/bootstrap.css";
import ListCard from "../BodyComponent/ListCard";
import ProductCarousel from "./ProductCarousel/ProductCarousel";

const BodyComponent = () => {
  return (
    <div className="body ">
      <div className="cards-wrapper">
        <ListCard />
      </div>
      <div>
        <ProductCarousel />
      </div>
    </div>
  );
};

export default BodyComponent;
