import React, { useContext } from 'react'
import { ShopContext } from '../context/Context'

const ShopCategory = ({banner}) => {
  const {all_product} =useContext(ShopContext)
  return (
    <div className='shop_category'>
        <img src={banner} alt="" />
    </div>
  )
}

export default ShopCategory