import Navbar from './components/Navbar.jsx'
import Products from './views/products.jsx'
import { Router, Route, Routes } from 'react-router-dom'
import {ImagenProvider} from './components/Context/MyContext.jsx';
import './App.css'


function App() {
  

  return (
    <>
      <ImagenProvider>
        
        <Navbar>
          <Router>
            <Routes>
              <Route path="/" element={<Products/>}/>
            </Routes>
          </Router>
        </Navbar>
      </ImagenProvider>
    </>
  )
}

export default App
