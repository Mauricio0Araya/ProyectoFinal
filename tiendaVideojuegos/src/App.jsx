import Navbar from "./components/Navbar.jsx";
import Game from './components/Game';
import GameDetail from './components/GameDetail.jsx';
import Iniciarsesion from "./components/IniciarSesion.jsx";

import Signup from "./views/signup.jsx";
import Cart from "./views/Cart.jsx";
import Profile from "./views/Profile.jsx";
import Favorites from "./views/Favorites.jsx";
import Purchases from "./views/Purchasehistory.jsx";
import PurchaseDetailShower from "./views/PurchaseDetailShower.jsx";

import { useContext } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
//import {ImagenProvider} from "./components/Context/MyContext.jsx"; Se comenta para añadir ImagenContext.jsx
import {ImagenProvider} from "./components/Context/ImagenContext.jsx";
import {UserContext} from "./components/Context/userContext";
import './App.css'


function App() {
  
  const {user} = useContext(UserContext);
  const enableTest = 1;

  return (
    <>
      <ImagenProvider>        
          <BrowserRouter>
            <Navbar/>
              <Routes>
                <Route exact path="/" element={<Game/>}></Route>
                <Route exact path="/game/:id" element={<GameDetail/>}></Route>
                <Route path="/login" element={<Iniciarsesion/>}></Route>
                <Route path="/signup" element={<Signup/>}></Route>
                <Route path="/cart" element={<Cart/>}></Route>
                <Route path="/profile" element={user || enableTest==1 ? <Profile/> : <Navigate to="/login"/>}></Route>
                <Route path="/favorites" element={user || enableTest==1 ? <Favorites/> : <Navigate to="/login"/>}></Route>
                <Route path="/purchasehistory" element={user || enableTest==1 ? <Purchases/> : <Navigate to="/login"/>}></Route>
                <Route path="/purchasehistory/:id" element={user || enableTest==1 ? <PurchaseDetailShower/> : <Navigate to="/login"/>}></Route>
              </Routes>
          </BrowserRouter>
      </ImagenProvider>
    </>
  )
}

export default App
