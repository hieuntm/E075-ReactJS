import HeartIcon from "./HeartComponent/index";
import "./style.css";

const CardComponent = ({ title, myImage, price, prePrice }) => {
  return (
    <div className="col-sm-3">
      <div className="thumb-wrapper">
        <HeartIcon></HeartIcon>
        <div className="img-box">
          <img src={myImage} className="img-fluid" />
        </div>
        <div className="thumb-content">
          <h4>{title}</h4>
          <div className="star-rating">
            <ul className="list-inline">
              <li className="list-inline-item">
                <i className="fa fa-star"></i>
              </li>
              <li className="list-inline-item">
                <i className="fa fa-star"></i>
              </li>
              <li className="list-inline-item">
                <i className="fa fa-star"></i>
              </li>
              <li className="list-inline-item">
                <i className="fa fa-star"></i>
              </li>
              <li className="list-inline-item">
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
