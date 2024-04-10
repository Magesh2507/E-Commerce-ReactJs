import { createContext, useEffect, useState } from "react";

const DataContext = createContext({})

export function DataProvider({children}) {
    const [total,setTotal] = useState(0)
    const [cart, setCart] =useState([])

    
    const addToCart = (product) =>{
        setCart([...cart,product])
      } 
      const removeFromCart = (product) =>{
        setCart(cart.filter(c=>product.id!==c.id))
     }  
      
      useEffect(()=>{
        const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price), 0);
        setTotal(totalPrice);
      },[cart])
    
    return (

        <DataContext.Provider value={{ cart, setCart, total, addToCart, removeFromCart }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataContext