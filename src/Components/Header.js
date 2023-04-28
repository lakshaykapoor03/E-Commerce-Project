import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Header = () => {
const [loggedIn, setIsLoggedIn] = useState(true)
const cartItems =  useSelector(store => store.cart.items)
console.log(cartItems)

  return (
    <div className="flex justify-between list-none text-white p-2 bg-green-800 items-center cursor-pointer">
        <Link to="/"> <img className="w-14" src="https://cdn-icons-png.flaticon.com/512/3644/3644075.png" alt="" /></Link>
       <div className="flex justify-around w-[30%]">


<select className="outline-none bg-transparent">
  <option className='bg-black' value="saab">Men</option>
  <option className='bg-black' value="opel">Women</option>
  <option className='bg-black' value="audi">Children</option>
</select>
      <Link to="/deals"><li>Deals</li></Link> 
        <li>What's new</li>
        <li>Delivery</li>
       </div>
       <div className="flex justify-around w-[30%]">
       <Link to="/account"><li>Account</li></Link>
       <Link to="/cart"> <li>Cart- {cartItems.length}</li></Link>
        {loggedIn?<button className="p-1 bg-blue-600 text-white rounded" onClick={()=>{
          setIsLoggedIn(false)
        }}>Logout
        </button>:<button className="p-1 bg-blue-600 text-white rounded" onClick={()=>{
          setIsLoggedIn(true)
        }}>Login
        </button>}
       </div>
    </div>
  )
}

export default Header