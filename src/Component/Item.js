import React, { useContext } from 'react'
import "./Item.css"
// import product from './Wedding6'
import { ShopContext } from './shopcontext'
// import { Link } from 'react-router-dom';
// import {useState} from 'react'

const Item = (props) => {
    const{id,productName,productImage,productPrice}=props.data;
    // const {addToCart}=useContext(ShopContext)
    // const [price,setPrice]=useState(0)
    // const {cartItems}=useContext(ShopContext)
    const {removeCart}=useContext(ShopContext)
    const {addToCart}=useContext(ShopContext)
    // const {updateItem}=useContext(ShopContext)
  return (
     <div>
         <div className='item12'>
       <div><img src={productImage} alt=""/></div>
       <div style={{marginLeft:"170px",fontWeight:"bolder",fontSize:"30px",fontFamily:"serif"}}>{productName}</div>
       <div style={{marginLeft:"200px",fontWeight:"bolder",fontSize:"30px"}}>${productPrice}</div>
       <button  class="btn btn-primary" style={{marginLeft:"160px"}} onClick={()=>{addToCart(id)}}>+</button>Add To Cart<button class="btn btn-primary" onClick={()=>{removeCart(id)}}>-</button>
    </div>
     </div>

  )
}

export default Item
