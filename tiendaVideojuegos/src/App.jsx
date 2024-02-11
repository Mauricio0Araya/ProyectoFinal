import Navbar from "./components/Navbar.jsx";
import Products from "./views/Products.jsx";
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Cart from "./views/Cart.jsx";
import Profile from "./views/Profile.jsx";
import { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import {ImagenProvider} from "./components/Context/MyContext.jsx";
import {UserContext} from "./components/Context/userContext";
import './App.css'


function App() {
  
  const {user} = useContext(UserContext);
  const {usuariolista} = useContext(UserContext);
  const enableTest = 1;

  return (
    <>
      <ImagenProvider>        
          <BrowserRouter>
            <Navbar/>
              <Routes>
                <Route exact path="/" element={<Products/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/profile" element={user || enableTest==1 ? <Profile/> : <Navigate to="/login"/>}></Route>
              </Routes>
          </BrowserRouter>
      </ImagenProvider>
    </>
  )
}

export default App
