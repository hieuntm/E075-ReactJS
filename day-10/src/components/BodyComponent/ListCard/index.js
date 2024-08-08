import ListCardComponent from "./ListCardComponent/index";
import ListNavComponent from "./listNavComponent/index";

const ListCard = () => {
  return (
    <>
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
                <ListCardComponent></ListCardComponent>
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
