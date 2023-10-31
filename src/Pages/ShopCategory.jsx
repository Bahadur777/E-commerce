import React, { useContext } from 'react'
import { ShopContext } from '../context/Context'
import banner from '../images/banner_mens.png'

const ShopCategory = (props) => {
  const {all_product} =useContext(ShopContext)
  return (
    <div className='shop_category'>
        <img src={banner} alt="" />
    </div>
  )
}

export default ShopCategory