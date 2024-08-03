import "bootstrap/dist/css/bootstrap.css";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa";

const SocialMediaLoginComponent = () => {
  const icons = [
    { title: "Sign with Facebook", icon: <FaFacebook /> },
    { title: "Sign with Twitter", icon: <FaTwitter /> },
    { title: "Sign with Google", icon: <FaGooglePlusG /> },
  ];

  return (
    <>
      <div className="_form_05_socialmedia">
        <ol>
          {icons.map((item) => (
            <li>
              <a href="#">{item.icon}</a>
              {item.title}
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default SocialMediaLoginComponent;
