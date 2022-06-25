import React,{useState,useEffect} from 'react'
import { useStateContext } from './context/StateContext'
import {BsBagCheckFill} from 'react-icons/bs'
import Link from 'next/link';

function Success() {
const {settotalprice,setcartitems}=useStateContext();
useEffect(()=>{
    localStorage.clear();
    setcartitems([]);
    settotalprice(0);
})

  return (
    <div className='scon'>
        <BsBagCheckFill className='bagicon'></BsBagCheckFill>
        <div className="thank">Thank you for your purchase</div>
        <Link href={"/"}>
        <div className="gotostore">Go to store page</div>
        </Link>
    </div>
  )
}

export default Success