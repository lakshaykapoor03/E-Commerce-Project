import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux";
import { clearCart, removeItem, increseItemCount } from "../utils/cartSlice";

const CartCard = ({item, removeCartItem, increaseCartItem})=>{


  const {title, image, price, id, qty } = item;
  // let quantity= 1;

// console.log(item.id)
console.log(qty)
console.log(title)
// console.log(removeCartItem)




   return(
    <>
     <div className="flex justify-between m-4 items-center">
 <img className="w-12" src={image} alt="" srcSet="" />
 <p>{title}</p>
 <p>{price}</p>
 <div>
  <span>-</span>
  <input className="w-12 text-center" type="text" value={qty}/>
  <span onClick={()=> increaseCartItem(id)}>+</span>
 </div>
 <button onClick={()=>{
removeCartItem(id)
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

function removeCartItem (id){
 return dispatch(removeItem(id))
}

function increaseCartItem (id){
  return dispatch(increseItemCount(id))
 }


  return (
    <>
    <button onClick={()=>{
      clearCartItem()
    }} className="bg-red-200 rounded px-2 m-4 ">Clear Cart</button>

 {cartItems.map((item)=><CartCard increaseCartItem={increaseCartItem} removeCartItem={ removeCartItem}  key={item.id} item={item}/> )}
 </>
  )
}

export default Cart