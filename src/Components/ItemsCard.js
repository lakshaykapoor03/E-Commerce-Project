import React from "react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemsCard = ({ item }) => {
  const { title, price, image, category, rating } = item;
  const notify = () =>
    toast.success("Item Added!!", {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  const [itemClicked, setItemClicked] = useState(false);
  const dispatch = useDispatch()

  const addStoreItem = (item)=>{
    dispatch(addItem(item))
  }
   return (
    <div className="bg-white rounded-lg shadow-md w-56 flex flex-col items-center text-center p-2 m-2 cursor-pointer">
      <img className="w-24" src={image} alt="" />
      <h1>{title}</h1>
      <p>{category}</p>
      <div>
        <span className="mx-2"> {price}</span>
        <span>{rating.rate}</span>
      </div>
      {itemClicked ? (
        <button
          onClick={() => {
            //setItemClicked(false);
            
          }}
          disabled={true}
          className="rounded-full border-2 w-32 border-gray-300 text-gray-400 "
        >
          Item Added
        </button>
      ) : (
        <button
          onClick={() => {
            addStoreItem(item)
            notify();
            setItemClicked(true);
          }}
          className="rounded-full border-2 w-32 border-black hover:bg-slate-100 "
        >
          Add to cart
        </button>
      )}
      <ToastContainer />
    </div>
  );
};

export default ItemsCard;
