import React from 'react'
import { auth } from '../firebase'
import router from 'next/router';
import {FaUser} from 'react-icons/fa'
import Navbar from '../products/Navbar';
import { useStateContext } from '../context/StateContext';

function User() {
    const {setcuruser,setisprof,isprof,curuser}=useStateContext();
    console.log(isprof)
    function logout(){
        setcuruser()
        router.push("/");
    }
  return (
    <>
    <Navbar></Navbar>
    <div className='usercon'>
    <FaUser className='useric'></FaUser>
    <div className="useremail">{`Email : ${curuser?curuser.email:"N/A"}`}</div>
    <div onClick={logout} className="logoutbtn">Log Out</div>
    </div>
    </>
  )
}

export default User