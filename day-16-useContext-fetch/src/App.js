import ProductContextProvider from "./context/product-context";
import ProductComponent from "./component/ProductComponent"

function App() {
  return (
    <ProductContextProvider>
      <ProductComponent/>
    </ProductContextProvider>
  );
}

export default App;
