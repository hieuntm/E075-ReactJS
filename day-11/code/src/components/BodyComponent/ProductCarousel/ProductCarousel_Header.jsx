import "./ProductCarousel_Header.css";

export function ProductCarousel_Header() {
  return (
    <div className="product-carousel-header">
      <div className="product-carousel-header-left">
        <h4>PC Bán Chạy</h4>
        <span></span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
          <path
            fill="#f90101"
            d="M48 0C21.5 0 0 21.5 0 48L0 368c0 26.5 21.5 48 48 48l16 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L48 0zM416 160l50.7 0L544 237.3l0 18.7-128 0 0-96zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
          />
        </svg>
        <p>Trả góp 0%</p>
      </div>
      <div className="product-carousel-header-right">
        <p>PC I3</p>
        <p>PC I5</p>
        <p>PC I7</p>
        <p>PC I9</p>
        <p>PC R3</p>
        <p>PC R5</p>
        <p>PC R7</p>
        <p>PC R9</p>
        <p className="show-all">Xem tất cả</p>
      </div>
    </div>
  );
}
