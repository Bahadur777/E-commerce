import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopContextProvider from './context/Context.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ShopContextProvider>
   <App/>
   <ShopCategory>
  
   </ShopCategory>
   </ShopContextProvider>
  </React.StrictMode>,
)
