import React from 'react'
import { useStateContext } from '../context/StateContext'
import { BiArrowBack } from 'react-icons/bi'
import { BiTrash } from 'react-icons/bi'
import Link from 'next/link';
import FootBanner from '../Components/FootBanner'
import toast from "react-hot-toast";
import getStripe from '../lib/getstripe';

function Cart() {

  const { cartitems, totalprice, setcartitems,settotalprice } = useStateContext();
  function remove() {
    setcartitems([]);
    settotalprice(0);
  }
  const handleclick=async()=>{
    const stripe=await getStripe();
    const response=await fetch('../api/stripe',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
        },
        body:JSON.stringify(cartitems),

    });
    if(response.statusCode===500)return;
    const data=await response?.json();
    toast.loading('Redirecting ...');
    stripe.redirectToCheckout({sessionId:data.id})

  }
  return (
    <div className='cartcon'>
      <div className="cart">Cart</div>
      <Link href={"/"}>
        <div>
          <BiArrowBack className='gohome'></BiArrowBack>
        </div>
      </Link>
      <div className="maincart">
      {cartitems.length>0?
        <>
        <div></div>
          <div className='clearall' onClick={remove}>Remove All</div>
          
          {cartitems.map((item) => cartcompo(item))}
          <div className='total'>{`Total : RS ${totalprice}`}</div>
          <div className="paynowbtn" onClick={handleclick}>Pay Now</div>
          </>
        :
        nothing()
      }
       </div>
      <FootBanner className="footer"></FootBanner>
    </div>
  )
}
function cartcompo(item) {
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
    <div className='cartholder' key={item._id}>
      <div className='cartimageholder'>
        <img src={item.image[0]} alt="" className='cartimage' />
      </div>
      <div className='cartitemname'>
        <div className='cartname'>{item.name}</div>

        <div className='cartitemprice'>{`Rs ${item.price}`}</div>
      </div>
      <div>
        <BiTrash className='trash' onClick={() => rev(item)}></BiTrash>
      </div>
    </div>
  )
}
function nothing() {
  return (
    <div >
      <div >Your cart is empty</div>
      <Link href={"/"}>
        <div className='goback'>Continue Shopping</div>
      </Link>
    </div>
  )
}

export default Cart