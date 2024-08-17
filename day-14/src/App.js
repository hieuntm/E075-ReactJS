import ChildComponent from "./component/ChildComponent";

import AuthenContextProvider from "./context/authen-context";
import CartContextProvider from "./context/cart-context";
// account
// news
// about us
// settings
function App() {
  return (
    <AuthenContextProvider>
      <CartContextProvider>
        <ChildComponent />
      </CartContextProvider>

      <CartContextProvider>
        <ChildComponent />
      </CartContextProvider>
    </AuthenContextProvider>
  );
}

export default App;
