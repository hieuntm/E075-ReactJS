import HeartIcon from "./HeartComponent/index";
import "./style.css";

import Ipad from "../../../images/ipad.jpg";
import HeadphoneImg from "../../../images/headphone.jpg";
import MacbookAir from "../../../images/macbook-air.jpg";
import Nikon from "../../../images/nikon.jpg";
import PlayStation from "../../../images/play-station.jpg";
import MacbookPro from "../../../images/macbook-pro.jpg";
import Speaker from "../../../images/speaker.jpg";
import Galaxy from "../../../images/galaxy.jpg";
import Iphone from "../../../images/iphone.jpg";
import Canon from "../../../images/canon.jpg";
import Pixel from "../../../images/pixel.jpg";
import Watch from "../../../images/watch.jpg";

const CardComponent = ({ title, myImage, price, prePrice }) => {
  const arr = [
    Ipad,
    HeadphoneImg,
    MacbookAir,
    Nikon,
    PlayStation,
    MacbookPro,
    Speaker,
    Galaxy,
    Iphone,
    Canon,
    Pixel,
    Watch,
  ];
  // myImage => 1,2 ,3 ,4 ,5
  return (
    <div className="col-sm-3">
      <div className="thumb-wrapper">
        <HeartIcon></HeartIcon>
        <div className="img-box">
          <img src={arr[myImage - 1]} className="img-fluid" />
        </div>
        <div className="thumb-content">
          <h4>{title}</h4>
          <div className="star-rating">
            <ul className="list-inline">
              <li key="1" className="list-inline-item">
                <i className="fa fa-star"></i>
              </li>
              <li key="2" className="list-inline-item">
                <i className="fa fa-star"></i>
              </li>
              <li key="3" className="list-inline-item">
                <i className="fa fa-star"></i>
              </li>
              <li key="4" className="list-inline-item">
                <i className="fa fa-star"></i>
              </li>
              <li key="5" className="list-inline-item">
                <i className="fa fa-star"></i>
              </li>
            </ul>
          </div>
          <p className="item-price">
            <strike>{prePrice}</strike>
            <b>{price}</b>
          </p>
          <button className="btn">Add to cart</button>
        </div>
      </div>
    </div>
  );
};
export default CardComponent;
