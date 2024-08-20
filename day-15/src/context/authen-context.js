import { createContext, useState } from "react";

// AuthContext - Đảm bảo login logout đăng ký
// Có bao nhiêu account đủ yêu cầu để vào hệ thống
// State: Quản lý account
// State quản lý hành vi đăng nhập đăng ký
const defaultValue = {
  isLoggedIn: false,
  username: "",
  login: () => {},
  logout: () => {},
  register: () => {},
};

export const AuthenContext = createContext(defaultValue);

export default function AuthenContextProvider({ children }) {
  const [accounts, setAccounts] = useState([
    { username: 123, password: 123 },
    { username: 1234, password: 1234 },
  ]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const value = {
    isLoggedIn: isLoggedIn,
    username: username,
    accounts: accounts,
    login: (username, password) => {
      // kiểm tra, username, password có đúng hay ko
      // trả về true false là được
      const inputAccount = accounts.filter(
        (account) =>
          account.username === username && account.password === password
      );
      console.log("Context, ", accounts, inputAccount);
      if (inputAccount.length > 0) {
        setUsername(inputAccount[0].username);
        setIsLoggedIn((preState) => !preState);
        return true;
      }
      // Tồn tại 1 account
      return false;
    }, // Hoạt động dựa vào state nằm ở bên trong cái context
    logout: () => {
      setIsLoggedIn((preState) => !preState);
    },
    register: (username, password) => {
      setAccounts((preState) => {
        return [...preState, { username: username, password: password }];
      });
    },
    // Login
  };

  return (
    <AuthenContext.Provider value={value}>{children}</AuthenContext.Provider>
  );
}
