import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { clearCart, removeItem } from "../utils/cartSlice";

const CartCard = ({item})=>{
  const {title, image, price, id } = item;
  const dispatch = useDispatch()

  const removeCartItem = (item)=>{
    dispatch(removeItem(item))
  }
   return(
    <>
     <div className="flex justify-between m-4 items-center">
 <img className="w-12" src={image} alt="" srcSet="" />
 <p>{title}</p>
 <p>{price}</p>
 <button onClick={()=>{
  removeCartItem(item)
 }} className="rounded-full px-2 m-2 text-white bg-red-600">X</button>
     </div>
     </>
   )
 }

const Cart = () => {

  const cartItems =  useSelector(store => store.cart.items)
console.log(cartItems)

const dispatch = useDispatch()

const clearCartItem = ()=>{
  dispatch(clearCart())
}


  return (
    <>
    <button onClick={()=>{
      clearCartItem()
    }} className="bg-red-200 rounded px-2 m-4 ">Clear Cart</button>

 {cartItems.map((item)=><CartCard key={item.id} item={item}/> )}
 </>
  )
}

export default Cart