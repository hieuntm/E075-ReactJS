import "bootstrap/dist/css/bootstrap.css";

const ListLinkComponent = () => {
  const links = ["Link 1", "Link 2", "Link 3", "Link 4", "Link 5", "Link 5"];

  return (
    <>
      <h5 class="text-uppercase">Links</h5>
      <ul class="list-unstyled mb-0">
        {links.map((item) => (
          <li>
            <a href="#!" class="text-white">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ListLinkComponent;
