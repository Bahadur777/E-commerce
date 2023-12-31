import React, { useContext } from 'react'
import {Context}  from '../context/Context'
import { useParams } from 'react-router-dom'
import Breadcrum from '../component/Breadcrum/Breadcrum'

const Product = () => {
  const {all_product} = useContext(Context)
  const {productId} = useParams();
  const product = all_product.find((e) =>e.id === Number(productId))
  return (
    <div>
      <Breadcrum product= {product}/>
    </div>
  )
}

export default Product