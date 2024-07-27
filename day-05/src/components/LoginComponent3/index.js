import { useState } from "react";
import HomeComponent from "./HomeComponent";
import LoginFormComponent from "./LoginFormComponent";
import SignUpFormComponent from "./SignUpFormComponent";

const LoginComponent3 = () => {
  // State dùng để lưu trữ accounts tồn tại trong hệ thống
  const [accountsState, setAccountsState] = useState([
    { username: "username1", password: "123", balance: 2000, cart: [] },
    { username: "username2", password: "234", balance: 2000, cart: [] },
  ]);

  // State quản lý đăng nhập hay chưa đăng nhập
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const [showHomePage, setShowHomePage] = useState(false);

  // State
  const [currentAccount, setCurrentAccount] = useState(null);

  const handleShowSignUpForm = () => {
    setShowSignUpForm((prevState) => !prevState); // An form dang ky
    handleShowLoginForm(); // Show form dang nhap
  };

  const handleShowLoginForm = () => {
    setShowLoginForm((prevState) => !prevState);
  };

  const handleShowInfo = (account) => {
    setCurrentAccount(account);
  };

  return (
    <div>
      {showSignUpForm && <SignUpFormComponent onShowLoginPage={handleShowSignUpForm}></SignUpFormComponent>}
      {!showLoginForm && (
        <LoginFormComponent
          onLogin={handleShowLoginForm}
          onShowInfo={handleShowInfo}
          accounts={accountsState}
          onRegisterView={handleShowSignUpForm}
        ></LoginFormComponent>
      )}
      {showHomePage && (
        <HomeComponent
          currentAccount={currentAccount}
          onLogout={handleShowLoginForm}
        ></HomeComponent>
      )}
    </div>
  );
};

export default LoginComponent3;
