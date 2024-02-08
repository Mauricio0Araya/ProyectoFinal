import React from 'react'
import ReactDOM from 'react-dom/client'
import UserProvider from "./components/context/userContext.jsx";
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>,
)