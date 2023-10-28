import React from 'react'
import './newCollections.css'
import New_Collections from '../../images/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {
  return (
    <div className='newcollections'>
        <div className="header-top">
            <h1>New Collections</h1>
            <hr />
        </div>
        <div className="collections">
           {New_Collections.map((item, i)=>{
             return <Item  key={i} id={item.id} name={item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price} />
           })}
        </div>

    </div>
  )
}

export default NewCollections