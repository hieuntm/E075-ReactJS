import UserInfoContextProvider, {
  UserInfoContext,
} from "../context/user-info-context";
import { useContext } from "react";

const ParentComponent = () => {
  const userInfoContext = useContext(UserInfoContext);
  console.log(userInfoContext);
  return (
    <UserInfoContextProvider>
      <div>Hello X</div>
    </UserInfoContextProvider>
  );
};

export default ParentComponent;
