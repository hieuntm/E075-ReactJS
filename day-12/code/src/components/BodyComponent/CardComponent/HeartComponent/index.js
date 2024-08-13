import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState } from "react";

const HeartIcon = () => {
  const [liked, setLiked] = useState(true);

  const toggleLike = () => {
    setLiked(!liked);
  };

  return (
    <span className="wish-icon">
      <i
        className={`fa ${liked ? "far fa-heart" : "fas fa-heart"}`}
        onClick={toggleLike}
      ></i>
    </span>
  );
};
export default HeartIcon;
