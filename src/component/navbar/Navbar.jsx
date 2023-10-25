import React, { useState } from 'react'
import './navbar.css'
import Logo from '../../images/logo.png'
import car_Icons from '../../images/cart_icon.png'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="menus">
        <ul className='menu_links'>
            <li onClick={()=>{setMenu("shop")}}><Link to='/' style={{textDecoration:'none'}}>shop</Link> {menu === "shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("man")}}><Link to='/men' style={{textDecoration:'none'}}>Man</Link> {menu === "man"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("women")}}> <Link to= '/women' style={{textDecoration:'none'}}>Women</Link> {menu === "women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}> <Link to='/kids' style={{textDecoration:'none'}}>Kids</Link> {menu === "kids"?<hr/>:<></>}</li>
        </ul>
      </div>
      <div className="cart-options">
        <Link to="/login"><button>Login</button></Link>
         <Link to="/cart"> <img src={car_Icons} alt="" /></Link>
       
        <div className="cart-count">0</div>
      </div>

    </div>
  )
}

export default Navbar