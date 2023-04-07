import React from 'react'
import ItemsCard from './ItemsCard'
import { useState, useEffect } from 'react'

const Body = () => {
    const [itemsList, setItemsList] = useState([])
    const [searchText, setSearchText] = useState("")

    const getItems =(async()=>{
        const data=  await fetch("https://fakestoreapi.com/products")
        const json = await data.json()
        setItemsList(json)
    })

    const searchItems = ((itemsList, searchText)=>{
        const filteredItem =  itemsList.filter((item)=> item.title.toLowerCase().includes(searchText))
        console.log(searchText)
        return filteredItem;
    })
   
    useEffect(()=>{
        getItems()
    }, [])

  return (
   <>
   <div className="ml-[40%]">
   <input type="text" className="h-8 rounded outline-none text-black" placeholder='Search items...' value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
<button onClick={(()=>{
    const filteredData = searchItems(itemsList, searchText)
    setItemsList(filteredData) ;
})}>Search</button>
   </div>
    <div className="flex justify-evenly flex-wrap">
        {
            itemsList.map((item)=>
            (<ItemsCard key = {item.id} item={item}/>))
        }
    </div>
   </>
  )
}

export default Body