const HomeComponent = ({ onLogout, currentAccount }) => {
  const logoutHandler = () => {
    // setShowLoginForm((prevState) => !prevState);
    onLogout();
  };

  return (
    <div>
      Login thanh cong, xin chao {currentAccount.username}
      <br/>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};

export default HomeComponent;
