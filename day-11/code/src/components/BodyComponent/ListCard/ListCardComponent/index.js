import CardComponent from "../../CardComponent";
import Loader from "../../../UI/Loader";

const ListCardComponent = ({ products, isLoading }) => {
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
    </>
  );
};

export default ListCardComponent;
