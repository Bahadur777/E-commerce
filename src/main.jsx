import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import shopContextProvider from './context/Context.jsx'
import ShopCategory from './Pages/ShopCategory.jsx'
shopContextProvider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <shopContextProvider>
   <ShopCategory>
    <App/>
   </ShopCategory>
   </shopContextProvider>
  </React.StrictMode>,
)
