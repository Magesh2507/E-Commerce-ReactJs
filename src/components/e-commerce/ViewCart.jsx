import React, { useContext, useEffect, useState } from 'react'
import './viewcart.css'
import DataContext from './context'

const ViewCart = () => {
 const { cart,removeFromCart, total } = useContext(DataContext)
  
  return (
    <div className='view-cart-container'>
      {cart.length > 0 &&  cart.map(product => (
        <div key={product.id} className='vc-product-container'>
          <div className='vc-img-container'>
            <img src={product.imageURL} alt={product.productName} />
          </div>
          <div className='text'>
            <p className='product-name'>{product.productName}</p>
            <p className='price'>${product.price}</p>
          </div>
          <div className='rm-btn-div'><button className='remove'onClick={()=>removeFromCart(product)}>Remove</button></div>
        </div>
      ))}
    {cart.length > 0 && <h3 className='total'>Total Amount<p className='price'>${total}</p></h3>}
    {cart.length === 0 && <div className='empty'><h3>Your Cart is Empty...</h3></div>}
    </div>
  )
}

export default ViewCart