import React from 'react'
import ItemsCard from './ItemsCard'
import { useState, useEffect } from 'react'

const Body = () => {
    const [itemsList, setItemsList] = useState([])
    const [filteredItemsList, setFilteredItemsList] = useState([])
    const [searchText, setSearchText] = useState("")

    const getItems =(async()=>{
        const data=  await fetch("https://fakestoreapi.com/products")
        const json = await data.json()
        setItemsList(json)
        setFilteredItemsList(json)
        console.log(json)
    })

    const searchItems = ((itemsList, searchText)=>{
        const filteredItem =  itemsList.filter((item)=> item.title.toLowerCase().includes(searchText))
        console.log(searchText)
        return filteredItem;
    })
   
    useEffect(()=>{
        getItems()
        console.log("render")
    }, [])

  return (
   <>
   <div className="ml-[40%]">
   <input type="text" className="h-8 rounded outline-none text-black" placeholder='Search items...' value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
<button className="bg-green-400 rounded  m-2 px-1" onClick={(()=>{
    const filteredData = searchItems(itemsList, searchText)
    setFilteredItemsList(filteredData) ;
})}>Search</button>
   </div>
   {
    itemsList.length===0? <>
    <h1>Shimmer ui loading......</h1>
   </> :
     <div className="flex justify-evenly flex-wrap">
     {filteredItemsList.length===0? <h1>No results found...</h1>:
         filteredItemsList.map((item)=>
         (<ItemsCard key = {item.id} item={item}/>))
     }
 </div>
   }
   </>
  )
}

export default Body;