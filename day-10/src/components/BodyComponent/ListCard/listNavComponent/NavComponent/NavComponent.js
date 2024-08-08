const NavComponent = ({ titleNav, hrefNav, ...restParams }) => {
  return (
    <>
      <li className="nav-item">
        <a className="nav-link" href={hrefNav} {...restParams}>
          {titleNav}
        </a>
      </li>
    </>
  );
};
export default NavComponent;
