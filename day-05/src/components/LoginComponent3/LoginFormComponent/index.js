import { useState } from "react";
import TableRow from "../UI/TableRow";
const LoginFormComponent = ({ accounts, onLogin, onShowInfo, onRegisterView }) => {
  // 2 State quản lý, input của người dùng
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const signUpHandler = () => {
    onRegisterView();
  };

  const loginHandler = () => {
    for (let account of accounts) {
      if (account.username === username) {
        if (account.password === password) {
          console.log("Dang nhap thanh cong");
          onLogin();
          onShowInfo(account);
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
      <TableRow
        title="Username"
        valueInput={username}
        handler={usernameHandler}
      ></TableRow>
      <TableRow
        title="Password"
        valueInput={password}
        handler={passwordHandler}
      ></TableRow>
      <tr>
        <td>
          <button onClick={loginHandler}>Login</button>
        </td>
        <td>
          <button onClick={signUpHandler}>Register</button>
        </td>
      </tr>
    </table>
  );
};

export default LoginFormComponent;
