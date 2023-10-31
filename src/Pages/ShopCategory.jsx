import React, { useContext } from 'react'
import { ShopContext } from '../context/Context'
import dropdown_icons from '../images/dropdown_icon.png'
import Item from '../component/Item/Item'
import '../Pages/shopCategory.css'

const ShopCategory = (props) => {
  const {all_product} =useContext(ShopContext)
  return (
    <div className='shop_category'>
        <img className='category-banner' src={props.banner} alt="" />
        <div className="shopCategory-indexSort">
          <p><span>showing 1-12</span> out of the products</p>
          <div className="shopcategory-sort">
            sort by <img src={dropdown_icons} alt="" />
          </div>
        </div>
        <div className="shopCategory_products">
          {
            all_product.map((item,i)=>{
              if(props.category=== item.category){
                return <Item  key={i} id={item.id} name={item.name} image = {item.image} new_price = {item.new_price} old_price = {item.old_price} />
              }
              else {
                return null
              }
            })
          }
        </div>
        <div className="loadmore">
          Explore more
        </div>
    </div>
  )
}

export default ShopCategory