import { createContext, useState } from "react";
import product  from "./Wedding6.js";
export const ShopContext=createContext(null);
let getDefaultItem=()=>{
    let cart={}
    for(let i=1;i<product.length+1;i++){
            cart[i]=0;
    }
    return cart;
}
export const ShopContextProvider=(props)=>{
    const [cartItems, setItems]=useState(getDefaultItem());

    console.log(cartItems);
   
    const addToCart=(itemId)=>{
        setItems((prev)=>({...prev,[itemId]:prev[itemId]+1}));
    }
    const removeCart=(itemId)=>{
        setItems((prev)=>({...prev,[itemId]:(prev[itemId]-1>=0)?prev[itemId]-1:0}));
    }
    const updateItem=(newItem,itemId)=>{
        setItems((prev)=>({...prev,[itemId]:newItem}));
    }
    const contextValue={cartItems,addToCart,removeCart,updateItem}
    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
}
