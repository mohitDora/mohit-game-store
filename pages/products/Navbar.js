import React,{useState,useEffect} from 'react'
import { BsFillCartFill } from 'react-icons/bs'
import {FaUser} from 'react-icons/fa'
import Link from 'next/link'
import { useStateContext } from '../context/StateContext'

function Navbar() {
  const { curuser,username,isprof,setisprof }=useStateContext();
 
  useEffect(()=>{
    {curuser?setisprof(true):setisprof(false)}
  },[])
  return (
    <div className="navcon" >
      <div className="nav">
      
        <Link href={"/"}>
          <div className="imgholder">Game Store</div>
        </Link>
        <div className='iconholder'>
          <div className='naam'>
          {`Hello ${curuser?curuser.email:"user"}`}
          
          </div>
        
          <Link href={isprof?"../Components/User":'../Components/Signin'}>
          <div>
        <FaUser className='usericon'></FaUser>
        </div>
        </Link>
        <Link href={'/products/Cart'}>
          <div>
            <BsFillCartFill className='carticon'></BsFillCartFill>
          </div>
        </Link>
        </div>
        
      </div>
    </div>
  )
}

export default Navbar