import React from 'react'
import './app.css'
import Navbar from './component/navbar/Navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ShopCategory from './Pages/ShopCategory'
import MainShop from './Pages/MainShop'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSingUp from './Pages/LoginSingUp'
import Footer from './component/Footer/Footer'
import men_banner from '../src/images/banner_mens.png'
import women_banner from './images/banner_women.png'
import kid_banner from './images/banner_kids.png'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path='/' element={<MainShop/>} />
       <Route path='/men' element={<ShopCategory banner = {men_banner} category = "men"/>} />
       <Route path='/women' banner ={women_banner} element={<ShopCategory category = "women"/>} />
       <Route path='/kids' banner = {kid_banner} element={<ShopCategory category = "kids"/>} />
       <Route path='/product' element={<Product/>}>
          <Route path=':productId' element= {<Product/>}/>
       </Route>
       <Route path='/cart' element={<Cart/>} />
       <Route path='/login' element={<LoginSingUp/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
      
    </div>
  )
}

export default App