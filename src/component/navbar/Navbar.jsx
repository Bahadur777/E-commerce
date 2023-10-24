import React from 'react'
import './navbar.css'
import Logo from '../../images/logo.png'
import car_Icons from '../../images/cart_icon.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="nav-logo">
        <img src={Logo} alt="" />
      </div>
      <div className="menus">
        <ul className='menu_links'>
            <li>shop</li>
            <li>Man</li>
            <li>Women</li>
            <li>Kids</li>
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