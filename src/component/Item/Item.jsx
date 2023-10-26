import React from 'react'
import './item.css'

const Item = ({image, name, new_price, old_price}) => {
  return (
    <div className='item'>
        <img src={image} alt="" />
         <div className="item-content">
         <p>{name}</p>
        <div className="item_price">
            <div className="new_price">
                {new_price}
            </div>
            <div className="old_price">
                {old_price}
            </div>
         </div>
        </div>
    </div>
  )
}

export default Item