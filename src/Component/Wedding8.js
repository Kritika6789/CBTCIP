import React, { useContext, useEffect, useState } from 'react'
import product from './Wedding6.js'
import Item from './Item.js'
import { ShopContext } from './shopcontext.js'
// import {
//   Link
// } from "react-router-dom";
const Wedding8 = () => {
  const {cartItems}=useContext(ShopContext);
  const [amount,setAmount]=useState(0)
  
  const getprice=()=>{
    let a=0;
    
    {product.map((PRODUCT)=> 
       
      { 
     
      if(cartItems[PRODUCT.id]!==0){
      a=a+cartItems[PRODUCT.id]*PRODUCT.productPrice
      console.log("product id is"+PRODUCT.id)
     }
    
      }
     )
     setAmount(a);
     }
   }
   useEffect(()=>{
    getprice();
   })
  return (
    <div>
      
      <div> <h1 style={{textAlign:"center",fontFamily:"'Comfortaa',display",margin:"20px"}}>Wedding Decoration</h1></div>
      <div className='row mx-2'>{product.map((PRODUCT)=>{
        
        return <div className='col-md-4 my-3'><Item data={PRODUCT}/></div>
  
      })}</div>
      <div> <h1 style={{textAlign:"center",fontFamily:"'Comfortaa',display",margin:"20px"}}>Total Amount:{amount<0?0:amount}</h1></div>
    </div>
  )
}

export default Wedding8