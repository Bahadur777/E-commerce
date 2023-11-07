import React from 'react'
import './item.css'
import { Link } from 'react-router-dom'

const Item = ({image, name, new_price, old_price},props) => {
  return (
    <div className='item'>
      <Link to={`/product/${props.id}`}><img src={image} alt="" /></Link>
        
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