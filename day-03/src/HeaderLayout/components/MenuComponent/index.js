import MenuItem from "../MenuItem";

const MenuComponent = () => {
  const menus = ["Home", "About", "Service", "Contact"];
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {menus.map((item, index) => {
        return <MenuItem>{item}</MenuItem>;
      })}
      {/* <MenuItem>Home</MenuItem> */}
    </ul>
  );
};

export default MenuComponent;
