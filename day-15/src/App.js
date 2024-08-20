import ChildComponent from "./component/ChildComponent";
import ChildComponent2 from "./component/ChildComponent2";
import ChildComponent3 from "./component/ChildComponent3";
import NotFoundComponent from "./component/NotFoundComponent";


import { Routes, Route, Link, NavLink, BrowserRouter } from 'react-router-dom'

import AuthenContextProvider from "./context/authen-context";
import CartContextProvider from "./context/cart-context";
// account
// news
// about us
// settings
function App() {
  return (
    <AuthenContextProvider>
      {/* <ProductsContextProvider>
                <Routes>
            <Route index element={<ChildComponent/>}/>
            <Route path="/home" element={<ChildComponent2/>}>
              <Route path=":id" element={<ChildComponent2/>}/> 
            </Route>
            <Route path="/news" element={<ChildComponent3/>}/>
            <Route path="/login" element={<ChildComponent2/>}/>
            <Route path="/signup" element={<ChildComponent2/>}/>
          </Routes>
          </ProductsContextProvider> */}
      <CartContextProvider>
        <BrowserRouter>
          <div>
            <ul>
              <li>
                <NavLink to='/' className='nav-link'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/news' className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }> News
                </NavLink>
              </li>
              <li>
                <NavLink to='/home' className='nav-link'>Home</NavLink>
              </li>
              <li>
                <NavLink to='/login' className='nav-link'>Contact</NavLink>
              </li>
           </ul>
          </div>
          <Routes>
            <Route index element={<ChildComponent/>}/>
            <Route path="/home" element={<ChildComponent2/>}>
              <Route path=":id" element={<ChildComponent2/>}/> 
            </Route>
            <Route path="/news" element={<ChildComponent3/>}/>
            <Route path="/login" element={<ChildComponent2/>}/>
            <Route path="/signup" element={<ChildComponent2/>}/>
            <Route path="*" element={<NotFoundComponent/>}/>
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </AuthenContextProvider>
  );
}

export default App;
