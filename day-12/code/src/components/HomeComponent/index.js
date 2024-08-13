import { useContext } from "react";
import HeaderComponent from "../HeaderComponent/index";
import FooterComponent from "../FooterComponent/index";
import BodyComponent from "../BodyComponent/index";
import { UserContext } from "../../App";

const HomeComponent = ({ onLogout, currentAccount, setCurrentAccount }) => {
  const userContext = useContext(UserContext);

  console.log(userContext);

  const logout = () => {
    onLogout(false);
  };

  return (
    <div>
      <HeaderComponent
        onLogout={logout}
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
      ></HeaderComponent>
      <BodyComponent></BodyComponent>
      <FooterComponent currentAccount={currentAccount}></FooterComponent>
    </div>
  );
};

export default HomeComponent;
