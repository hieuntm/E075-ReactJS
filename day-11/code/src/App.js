import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
import LoginComponent from "./components/LoginComponent";
import HomeComponent from "./components/HomeComponent";
import RegisterComponent from "./components/RegisterComponent";

function App() {
  // App -  component cha
  // Chứa toàn bộ các component con, cháu, chắt, chút

  // Login component -> Đăng nhập, và trạng thái đăng nhập
  // Trạng thái đăng nhập: Đăng nhập thành công và không thành công

  const [accountsState, setAccountsState] = useState([
    { username: "username1", password: "123", balance: 2000, cart: [] },
    { username: "username2", password: "234", balance: 2000, cart: [] },
  ]);

  const [currentAccount, setCurrentAccount] = useState(null);

  const [isLogin, setIsLogin] = useState(true);
  const [isRegister, setIsRegister] = useState(false);

  // State: Kiểm tra xem có đăng nhập thành công hay không

  const changeStateForm = () => {
    setIsLogin((preState) => !preState);
    setIsRegister((preState) => !preState);
  };

  return (
    <>
      {!isLogin && (
        <LoginComponent
          accounts={accountsState}
          onLogin={setIsLogin}
          setCurrentAccount={setCurrentAccount}
          changeRegisterForm={changeStateForm}
        ></LoginComponent>
      )}
      {isRegister && (
        <RegisterComponent
          accounts={accountsState}
          changeLoginForm={changeStateForm}
          addAccount={setAccountsState}
        ></RegisterComponent>
      )}
      {isLogin && (
        <HomeComponent
          onLogout={setIsLogin}
          setCurrentAccount={setCurrentAccount}
          currentAccount={currentAccount}
        ></HomeComponent>
      )}
    </>
  );
}

export default App;
