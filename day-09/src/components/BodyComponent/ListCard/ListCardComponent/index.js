import CardComponent from "../../CardComponent";

import Ipad from "../../../../images/ipad.jpg";
import HeadphoneImg from "../../../../images/headphone.jpg";
import MacbookAir from "../../../../images/macbook-air.jpg";
import Nikon from "../../../../images/nikon.jpg";
import PlayStation from "../../../../images/play-station.jpg";
import MacbookPro from "../../../../images/macbook-pro.jpg";
import Speaker from "../../../../images/speaker.jpg";
import Galaxy from "../../../../images/galaxy.jpg";
import Iphone from "../../../../images/iphone.jpg";
import Canon from "../../../../images/canon.jpg";
import Pixel from "../../../../images/pixel.jpg";
import Watch from "../../../../images/watch.jpg";

const products = [
  {
    myImage: Ipad,
    title: "Apple iPad",
    prePrice: "$400.00",
    price: "$369.00",
  },

  {
    myImage: HeadphoneImg,
    title: "Sony Headphone",
    prePrice: "$25.00",
    price: "$23.99",
  },

  {
    myImage: MacbookAir,
    title: "Macbook Air",
    prePrice: "$899.00",
    price: "$649.00",
  },

  {
    myImage: Nikon,
    title: "Nikon DSLR",
    prePrice: "$315.00",
    price: "$250.00",
  },

  {
    myImage: PlayStation,
    title: "Sony Play Station",
    prePrice: "$289.00",
    price: "$269.00",
  },

  {
    myImage: MacbookPro,
    title: "Macbook Pro",
    prePrice: "$1099.00",
    price: "$869.00",
  },

  {
    myImage: Speaker,
    title: "Bose Speaker",
    prePrice: "$109.00",
    price: "$99.00",
  },

  {
    myImage: Galaxy,
    title: "Samsung Galaxy S8",
    prePrice: "$599.00",
    price: "$569.00",
  },

  {
    myImage: Iphone,
    title: "Apple iPhone",
    prePrice: "$369.00",
    price: "$349.00",
  },

  {
    myImage: Canon,
    title: "Canon DSLR",
    prePrice: "$315.00",
    price: "$250.00",
  },

  {
    myImage: Pixel,
    title: "Google Pixel",
    prePrice: "$450.00",
    price: "$418.00",
  },

  {
    myImage: Watch,
    title: "Apple Watch",
    prePrice: "$350.00",
    price: "$330.00",
  },
];

const ListCardComponent = () => {
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
      {temp.map((array, index) => (
        <div
          className={
            index === 0 ? "carousel-item item active" : "carousel-item item"
          }
        >
          <div className="row">
            {array.map((product) => (
              <CardComponent {...product}></CardComponent>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default ListCardComponent;
