import { createContext, useState } from "react";

export const UserInfoContext = createContext();

const UserInfoContextProvider = ({ children }) => {
  const [data, setData] = useState({ name: 123, age: 234 });

  return (
    <UserInfoContext.Provider value={data}>{children}</UserInfoContext.Provider>
  );
};

export default UserInfoContextProvider;
