import React from 'react'
import arrow_icons from '../../images/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;
  return (
    <div>
      Home <img src={arrow_icons} alt="" /> Shop <img src={arrow_icons} alt="" /> {product.category} <img src={arrow_icons} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum