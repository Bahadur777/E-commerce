import React from 'react'
import './app.css'
import Navbar from './component/navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory'
import MainShop from './Pages/MainShop'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSingUp from './Pages/LoginSingUp'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path='/' element={<MainShop/>} />
       <Route path='/men' element={<ShopCategory category = "men"/>} />
       <Route path='/women' element={<ShopCategory category = "women"/>} />
       <Route path='/kids' element={<ShopCategory category = "kids"/>} />
       <Route path='/product' element={<Product/>}>
          <Route path=':productId' element= {<Product/>}/>
       </Route>
       <Route path='/cart' element={<Cart/>} />
       <Route path='/login' element={<LoginSingUp/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  )
}

export default App