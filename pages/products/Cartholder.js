import React from "react";
import { useStateContext } from "../context/StateContext";
import { BiTrash } from 'react-icons/bi'
import toast from "react-hot-toast";

export default function Cartholder({name,price,image}) {
    const { cartitems, setcartitems, settotalprice, } = useStateContext();
    
    
    function rev(id) {
      toast(
        <div style={{
          fontSize: "1.5rem",
          fontWeight: "600",
        }}>Sucessfully Removed</div>
      )
      var newlist = cartitems.map((item) => {
        if (item._id !== id._id) {
          return item
        }
      })
      newlist = newlist.filter((i) => {
        return i !== undefined
      })
      setcartitems(newlist)
      settotalprice((prev) => prev - item.price)
    }
    return (
      <div className='cartholder'>
        <div className='cartimageholder'>
          <img src={image[0]} alt="" className='cartimage' />
        </div>
        <div className='cartitemname'>
          <div className='cartname'>{name}</div>
  
          <div className='cartitemprice'>{`Rs ${price}`}</div>
        </div>
        <div>
          <BiTrash className='trash' onClick={() => rev(item)}></BiTrash>
        </div>
      </div>
    )
  }