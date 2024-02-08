import Navbar from "./components/Navbar.jsx"
import Products from "./views/Products.jsx"
import Login from "./views/Login.jsx"
import Signup from "./views/Signup.jsx"
import Cart from "./views/Cart.jsx"
import Profile from "./views/Profile.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {ImagenProvider} from "./components/Context/MyContext.jsx";
import './App.css'


function App() {
  

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
                <Route path="/profile" element={<Profile/>}></Route>
              </Routes>
          </BrowserRouter>
      </ImagenProvider>
    </>
  )
}

export default App
