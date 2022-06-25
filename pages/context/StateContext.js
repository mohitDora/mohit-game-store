import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";
import { auth } from "../firebase";

function getcartdata(){
    if(typeof window!=="undefined"){
        const data=localStorage.getItem("cartData"); 
        if(data){
            return JSON.parse(data)
        }
        else{
            return []
        }   
    }
    return []  
}
function getpricedata(){
    if(typeof window!=="undefined"){
        const data=localStorage.getItem("totalprice"); 
        if(data){
            return parseInt(data)
        }
        else{
            return 0
        }  
    }
    return 0 
}
// function getprofdata(){
//     if(typeof window!=="undefined"){
//         const data=localStorage.getItem("isprof"); 
//         if(data){
//             return (data)
//         }
//         else{
//             return false
//         }  
//     }
//     return false
// }
const Context=createContext();

export const StateContext=({children})=>{
    const [showcart,setshowcart]=useState(false);
    const [cartitems,setcartitems]=useState(getcartdata());
    const [totalprice,settotalprice]=useState(getpricedata());
    const [curuser,setcuruser]=useState();
    const [username,setusername]=useState("");
    const [isprof,setisprof]=useState();

    useEffect(()=>{
        console.log(JSON.stringify(curuser));
        const unsubscribe=auth.onAuthStateChanged(user=>{
            setcuruser(user); 
            setusername(JSON.stringify(user))  
        })
        return unsubscribe
    },[])
    console.log(isprof)
    useEffect(()=>{     
    localStorage.setItem("cartData",JSON.stringify(cartitems));
    localStorage.setItem("totalprice",JSON.stringify(totalprice));
    localStorage.setItem("isprof",JSON.stringify(isprof));
    console.log(window.localStorage)
    },[cartitems])
    function addItem(product){
        console.log(cartitems)
        const checkProductInList=cartitems.find((item)=>item._id===product._id);
        if(checkProductInList){
            setcartitems([...cartitems]);
            toast(
                <div style={{fontSize:"1.5rem",
                fontWeight:"600"}}>Already Added</div>
            )
        }
        else{
            settotalprice((prevprice)=>prevprice+product.price);
            setcartitems([...cartitems,{...product}]);
            toast(
                <div style={{fontSize:"1.5rem",
                fontWeight:"600"}}>Sucessfully Added</div>
            )
        }    
    }
    console.log(cartitems)
    return(
        <Context.Provider value={
            {showcart,
            setshowcart,
            cartitems,
            setcartitems,
            totalprice,
            settotalprice,
            addItem,
            curuser,
            setcuruser,
            username,
            setusername,
            isprof,
            setisprof
            }
        }>
            {children}
        </Context.Provider>
    )
}
export const useStateContext=()=>useContext(Context);