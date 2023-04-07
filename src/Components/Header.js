import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between list-none text-white p-2 bg-green-800 items-center cursor-pointer">
        <img className="w-14" src="https://cdn-icons-png.flaticon.com/512/3644/3644075.png" alt="" />
       <div className="flex justify-around w-[30%]">


<select className="outline-none bg-transparent">
  <option className='bg-black' value="saab">Men</option>
  <option className='bg-black' value="opel">Women</option>
  <option className='bg-black' value="audi">Children</option>
</select>
        <li>Deals</li>
        <li>What's new</li>
        <li>Delivery</li>
       </div>
       <div className="flex justify-around w-[30%]">
        <li>Account</li>
        <li>Cart</li>
       </div>
    </div>
  )
}

export default Header