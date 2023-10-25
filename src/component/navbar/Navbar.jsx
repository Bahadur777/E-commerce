import React, { useState } from 'react'
import './navbar.css'
import Logo from '../../images/logo.png'
import car_Icons from '../../images/cart_icon.png'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="menus">
        <ul className='menu_links'>
            <li onClick={()=>{setMenu("shop")}}>shop {menu === "shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("man")}}>Man {menu === "man"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}>Women {menu === "women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}>Kids {menu === "kids"?<hr/>:<></>}</li>
        </ul>
      </div>
      <div className="cart-options">
      
        <button>Login</button>
        <img src={car_Icons} alt="" />
        <div className="cart-count">0</div>
      </div>

    </div>
  )
}

export default Navbar