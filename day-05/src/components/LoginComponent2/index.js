import { useState } from "react";

// const documet;
// addEvent

const LoginComponent2 = () => {
  // const accounts = [
  //   { username: "username1", password: "123" },
  //   { username: "username2", password: "234" },
  // ]; => hardcode

  // SPA -> Single page application

  const [accountsState, setAccountsState] = useState([
    { username: "username1", password: "123" },
    { username: "username2", password: "234" },
  ]);

  // username = modal
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showLoginForm, setShowLoginForm] = useState(false);

  const loginHandler = () => {
    console.log(username, password);
    for (let account of accountsState) {
      if (account.username === username) {
        if (account.password === password) {
          console.log("Dang nhap thanh cong");
          setShowLoginForm((prevState) => !prevState);
        }
      }
    }
  };

  const logoutHandler = () => {
    setShowLoginForm((prevState) => !prevState);
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      {showLoginForm && (
        <div>
          Login thanh cong
          <button onClick={logoutHandler}>Logout</button>
        </div>
      )}
      {!showLoginForm && (
        <table>
          <tr>
            <td>Username</td>
            <td>
              <input value={username} onChange={usernameHandler} />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>
              <input value={password} onChange={passwordHandler} />
            </td>
          </tr>
          <tr>
            <td>
              <button onClick={loginHandler}>Login</button>
            </td>
          </tr>
        </table>
      )}
    </div>
  );
};

export default LoginComponent2;
