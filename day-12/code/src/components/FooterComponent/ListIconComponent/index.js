import { FaAccusoft } from "react-icons/fa";
import { GiAbstract117 } from "react-icons/gi";
import { GiAirBalloon } from "react-icons/gi";
import { GoBug } from "react-icons/go";
import { GoFileZip } from "react-icons/go";
import { GoDownload } from "react-icons/go";
import { GoGitPullRequest } from "react-icons/go";

const ListIconComponent = () => {
  const icons = [
    <FaAccusoft />,
    <GiAbstract117 />,
    <GiAirBalloon />,
    <GoBug />,
    <GoFileZip />,
    <GoDownload />,
    <GoGitPullRequest />,
  ];

  return (
    <>
      {icons.map((icon, index) => (
        <a
          key={index}
          className="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
          {icon}
        </a>
      ))}
    </>
  );
};

export default ListIconComponent;
