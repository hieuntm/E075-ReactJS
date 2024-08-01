import HeaderComponent from "../HeaderComponent/index";
import FooterComponent from "../FooterComponent/index";
import BodyComponent from "../BodyComponent/index";

const HomeComponent = ({ onLogout, currentAccount, setCurrentAccount }) => {
  return (
    <div>
      <HeaderComponent
        onLogout={onLogout}
        currentAccount={currentAccount}
        setCurrentAccount={setCurrentAccount}
      ></HeaderComponent>
      <BodyComponent></BodyComponent>
      <FooterComponent currentAccount={currentAccount}></FooterComponent>
    </div>
  );
};

export default HomeComponent;
