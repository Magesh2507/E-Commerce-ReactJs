import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import './header.css'
import DataContext from './context'


const Header = () => {
    const {cart} = useContext(DataContext)


   return (
    <div className='header'>
        <h2>E-Commerce</h2>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/viewcart">View Cart</Link></li>
            {cart.length>0 && <li><Link to="/viewcart"><span>{cart.length}</span></Link></li>}
        </ul>

    </div>
  )
}

export default Header
