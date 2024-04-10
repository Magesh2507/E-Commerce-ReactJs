import React, { useContext, useState } from 'react'
import products from './products.json'
import './home.css'
import DataContext from './context'

const Home = () => {
    
  const {cart, addToCart, removeFromCart} = useContext(DataContext)
  
  return (
    <div className='container'>
      {products.map((product)=>(
        <div  key={product.id} className='product-container'>
          <div className='img-container'>
            <img src={product.imageURL} alt={product.productName} />      
          </div>
        <p className='product-name'>{product.productName}</p>
        <p className='price'>${product.price}</p>
        {cart.includes(product)?<button onClick={()=>removeFromCart(product)} className='remove-btn'>Remove from cart</button>:        
        <button onClick={()=>addToCart(product)} className='add-btn'>Add to cart</button>}
        </div>
      ))}
    </div>
  )
}

export default Home