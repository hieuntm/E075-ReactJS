import "bootstrap/dist/css/bootstrap.css";

const ListLinkComponent = () => {
  const links = ["Link 1", "Link 2", "Link 3", "Link 4", "Link 5", "Link 5"];

  return (
    <>
      <h5 className="text-uppercase">Links</h5>
      <ul className="list-unstyled mb-0">
        {links.map((item, index) => (
          <li key={index}>
            <a href="#!" className="text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListLinkComponent;
