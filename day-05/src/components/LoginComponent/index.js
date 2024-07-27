import { useState } from "react";

// const documet;
// addEvent

const LoginComponent = () => {
  // const accounts = [
  //   { username: "username1", password: "123" },
  //   { username: "username2", password: "234" },
  // ]; => hardcode

  const [accountsState, setAccountsState] = useState([
    { username: "username1", password: "123" },
    { username: "username2", password: "234" },
  ]);

  // username = modal
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    console.log(username, password);

    for (let account of accountsState) {
      if (account.username === username) {
        if (account.password === password) {
          console.log("Dang nhap thanh cong");
        }
      }
    }
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  return (
    <table>
      <tr>
        <td>Username {username}</td>
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
  );
};

export default LoginComponent;
