import { useState } from "react";
import TableRow from "../UI/TableRow";

const SignUpFormComponent = ({ onShowLoginPage, accounts, setAccounts }) => {
  // 2 State quản lý, input của người dùng
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  const signUpHandler = () => {
    // Kiem tra username ton tai chua
    // Loop 1 vòng, nếu như mà chưa có thì mới đăng nhập
    const isExisted = false;
    for (let account of accounts) {
      if (account.username === username) {
        isExisted = true;
        break;
      }
    }

    if (!isExisted) {
      // Kiem tra passowrd va re-password
      // Giữ nguyên account cũ, thêm account mới vào
      setAccounts((accounts) => {
        return [
          ...accounts,
          { username: username, password: password, balance: 0, cart: [] },
        ];
      });
      onShowLoginPage();
    }

    // Tao thanh cong => Them vao account o ComponentCha (LoginComponent3)
  };

  const loginPageHandler = () => {
    onShowLoginPage();
    // Doi State => show view => Show o ComponentCha (LoginComponent3)
  };

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const rePasswordHandler = (event) => {
    setRePassword(event.target.value);
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
      <TableRow
        title="Re-Password"
        valueInput={repassword}
        handler={rePasswordHandler}
      ></TableRow>
      <tr>
        <td>
          <button onClick={signUpHandler}>Signup</button>
        </td>
        <td>
          <button onClick={loginPageHandler}>Login Page</button>
        </td>
      </tr>
    </table>
  );
};

export default SignUpFormComponent;
