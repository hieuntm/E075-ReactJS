import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";
import LoginComponent from "./components/LoginComponent";
import HomeComponent from "./components/HomeComponent";

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
  // State: Kiểm tra xem có đăng nhập thành công hay không

  const changeStateLogin = () => {
    setIsLogin((preState) => !preState);
  };

  return (
    <>
      {!isLogin && (
        <LoginComponent
          accounts={accountsState}
          onLogin={changeStateLogin}
          setCurrentAccount={setCurrentAccount}
        ></LoginComponent>
      )}
      {isLogin && (
        <HomeComponent
          onLogout={changeStateLogin}
          setCurrentAccount={setCurrentAccount}
          currentAccount={{
            username: "username1",
            password: "123",
            balance: 2000,
            cart: [],
          }}
        ></HomeComponent>
      )}
    </>
  );
}

export default App;
