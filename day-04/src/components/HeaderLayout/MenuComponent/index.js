import MenuItem from "../MenuItem/index";

const MenuComponent = () => {
  const menus = ["Home", "About", "Service", "Contact"];
  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      {menus.map((item) => {
        return <MenuItem key={item}>{item}</MenuItem>;
      })}
    </ul>
  );
};

export default MenuComponent;
